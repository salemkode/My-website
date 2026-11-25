// The artwork for salemkode.com: floating voxel islands, one for each thing I made.
// Drawn with Focus Garden's own voxel engine (src/garden), so the pictures are in that app's hand.
// The site itself ships no 3D code. This scene exists to be photographed: open render.html?only=<place>
// and each place is drawn alone on a clear background (see render.sh).
import * as THREE from "three";
import { buildBalloon, buildCloud, buildIsland, buildIslet, buildMarker } from "./garden/models";
import { buildGrowthModel, buildTierModel, type SpeciesKey, type Tier } from "./garden/tiers";
import { mulberry32, type VoxelModel } from "./garden/voxel";
import { buildLighthouse, buildVenn, LIGHT_HEIGHT } from "./places";

type Vec = [number, number, number];

interface Place {
	id: string;
	group: THREE.Group;
	/** Where its name tag floats, in the group's own space. */
	tag: THREE.Vector3;
	/** How far it has drifted aside to give the chosen place the sky to itself. */
	aside: THREE.Vector3;
	/** The box the camera should frame when this place is chosen: width, height, and the height of its middle. */
	frame: { w: number; h: number; lift: number };
}

const canvas = document.querySelector<HTMLCanvasElement>("#world");
const root = document.documentElement;
const query = new URLSearchParams(location.search);
/** Draw one place alone, for a picture. */
const only = query.get("only");
const still = Boolean(only) || matchMedia("(prefers-reduced-motion: reduce)").matches || query.has("still");

function start(canvas: HTMLCanvasElement) {
	const small = Math.min(innerWidth, innerHeight) < 600;
	const renderer = new THREE.WebGLRenderer({
		canvas,
		antialias: true,
		alpha: true,
		powerPreference: "high-performance",
		preserveDrawingBuffer: still,
	});
	renderer.setPixelRatio(Math.min(small ? 1.75 : 2, devicePixelRatio));
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1.05;
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	renderer.shadowMap.autoUpdate = false;

	const scene = new THREE.Scene();
	scene.fog = new THREE.Fog(0xe6e3d6, 520, 1500);
	const camera = new THREE.PerspectiveCamera(32, 1, 1, 4000);

	// The same warm afternoon as the app: a low sun, a soft sky light, baked corner shading.
	const sun = new THREE.DirectionalLight(0xffe2b0, 3.2);
	sun.position.set(-170, 260, 190);
	sun.castShadow = true;
	sun.shadow.mapSize.setScalar(small ? 1024 : 2048);
	sun.shadow.radius = 4;
	sun.shadow.bias = -0.0004;
	sun.shadow.normalBias = 0.4;
	Object.assign(sun.shadow.camera, { left: -190, right: 190, top: 190, bottom: -190, near: 1, far: 900 });
	sun.shadow.camera.updateProjectionMatrix();
	scene.add(sun, sun.target, new THREE.HemisphereLight(0xfff4e0, 0x6b5a4a, 1.5));

	const solid = new THREE.MeshLambertMaterial({ vertexColors: true });
	const meshOf = (model: VoxelModel, shadow = true) => {
		const mesh = new THREE.Mesh(model.toGeometry(), solid);
		mesh.castShadow = shadow;
		mesh.receiveShadow = shadow;
		return mesh;
	};

	const places: Place[] = [];
	const place = (id: string, tag: Vec, frame: Place["frame"]) => {
		const group = new THREE.Group();
		group.userData.place = id;
		scene.add(group);
		const p = { id, group, tag: new THREE.Vector3(...tag), frame, aside: new THREE.Vector3() };
		places.push(p);
		return p;
	};

	/* ------------------------------------------------------- Focus Garden */

	const garden = place("focus-garden", [0, 34, 0], { w: 104, h: 86, lift: 2 });
	const island = buildIsland(7);
	garden.group.add(meshOf(island.model));

	// The trees a long-time user would have earned, on the app's own plots, in its own species.
	const species: SpeciesKey[] = ["oak", "cherry", "pine", "maple", "birch", "cash"];
	const rng = mulberry32(21);
	island.plots.slice(1, 30).forEach((plot, i) => {
		const roll = rng();
		const tier: Tier = roll < 0.3 ? "bigTree" : roll < 0.82 ? "tree" : "sprout";
		const tree = meshOf(buildTierModel(tier, species[Math.floor(rng() * species.length)], 100 + i));
		tree.position.set(plot.x, 1, plot.z);
		tree.rotation.y = Math.floor(rng() * 4) * (Math.PI / 2);
		garden.group.add(tree);
	});
	const cottage = meshOf(buildTierModel("house", "oak", 4));
	cottage.position.set(18, 1, -15);
	garden.group.add(cottage);

	// One tree is always growing, cube by cube, the way a focus session grows it.
	const sapling = new THREE.Mesh(new THREE.BufferGeometry(), solid);
	sapling.castShadow = true;
	sapling.position.set(island.plots[0].x, 1, island.plots[0].z);
	const marker = new THREE.Mesh(buildMarker().toGeometry(), solid);
	marker.position.copy(sapling.position);
	garden.group.add(sapling, marker);
	let growth = { species: 0, progress: -1, shown: -1 };
	const grow = (progress: number) => {
		const step = Math.round(progress * 48);
		if (step === growth.shown) return;
		growth.shown = step;
		sapling.geometry.dispose();
		sapling.geometry = buildGrowthModel(species[growth.species % species.length], step / 48, 300 + growth.species, "bigTree").toGeometry();
		renderer.shadowMap.needsUpdate = true;
	};

	// Streams leave the island as waterfalls. Two copies with their bands swapped take turns, so the water runs.
	const falls: THREE.Mesh[][] = [];
	const fallMaterial = new THREE.MeshPhongMaterial({
		vertexColors: true,
		transparent: true,
		opacity: 0.82,
		shininess: 70,
		specular: 0xd8f1ff,
		depthWrite: false,
	});
	for (const fall of island.waterfalls) {
		const pair = [0, 1].map((phase) => {
			const mesh = new THREE.Mesh(curtain(3, phase), fallMaterial);
			mesh.position.set(fall.x, -0.4, fall.z);
			mesh.rotation.y = Math.atan2(-fall.dz, fall.dx);
			mesh.visible = phase === 0;
			garden.group.add(mesh);
			return mesh;
		});
		falls.push(pair);
	}

	/* --------------------------------------------------------------- Venn */

	const venn = place("venn", [0, 24, 0], { w: 70, h: 62, lift: 0 });
	venn.group.add(meshOf(buildVenn()));
	for (const [x, z, kind, seed] of [
		[-10, -12, "tree", 2], [-14, 12, "tree", 5], [-25, 1, "sprout", 3],
		[11, -12, "tree", 7], [14, 12, "tree", 9], [25, 1, "sprout", 4],
	] as [number, number, Tier, number][]) {
		const tree = meshOf(buildTierModel(kind, x < 0 ? "cash" : "maple", seed));
		tree.position.set(x, 1, z);
		venn.group.add(tree);
	}

	/* ----------------------------------------------------------- Explorer */

	const explorer = place("explorer", [0, 36, 0], { w: 46, h: 62, lift: 8 });
	explorer.group.add(meshOf(buildLighthouse()));
	const lamp = new THREE.Group();
	lamp.position.y = LIGHT_HEIGHT;
	const beamMaterial = new THREE.MeshBasicMaterial({
		color: 0xfff1b8,
		transparent: true,
		opacity: 0.2,
		depthWrite: false,
		side: THREE.DoubleSide,
		fog: false,
	});
	for (const turn of [0, Math.PI]) {
		const beam = new THREE.Mesh(new THREE.CylinderGeometry(7, 0.6, 58, 14, 1, true), beamMaterial);
		beam.rotation.z = Math.PI / 2;
		beam.position.x = 30;
		const arm = new THREE.Group();
		arm.rotation.y = turn;
		arm.add(beam);
		lamp.add(arm);
	}
	explorer.group.add(lamp);

	/* -------------------------------------------- older work rides balloons */

	const balloon = (id: string, a: number, b: number, cap: number) => {
		const p = place(id, [0, 10, 0], { w: 40, h: 46, lift: -2 });
		p.group.add(meshOf(buildBalloon(a, b, cap), false));
		return p;
	};
	balloon("snapcraft", 0xe95420, 0xf7f2e8, 0x7a3b1d);
	balloon("faststarter", 0x2e6fd9, 0xffd23f, 0x1d3f7a);
	for (const seed of only ? [41, 44, 46] : []) {
		const cloud = place(`cloud-${seed}`, [0, 0, 0], { w: 34, h: 16, lift: 0 });
		cloud.group.add(new THREE.Mesh(buildCloud(seed).toGeometry(), new THREE.MeshLambertMaterial({ vertexColors: true })));
	}

	/* ------------------------------------------------------------ scenery */

	const cloudMaterial = new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 0.93 });
	const clouds = Array.from({ length: 9 }, (_, i) => {
		const r = mulberry32(60 + i);
		const mesh = new THREE.Mesh(buildCloud(40 + i).toGeometry(), cloudMaterial);
		mesh.scale.setScalar(2.2 + r() * 2.4);
		mesh.position.set((r() * 2 - 1) * 330, -50 + r() * 190, -300 + r() * 150);
		mesh.userData.speed = 1.5 + r() * 2.5;
		scene.add(mesh);
		return mesh;
	});
	const islets = ([
		[-150, 58, -120, 5, "pine"], [168, -12, -70, 4, "oak"], [-128, -30, 70, 3, "flowers"], [40, 78, -150, 4, "hut"],
	] as [number, number, number, number, "pine" | "oak" | "flowers" | "hut"][]).map(([x, y, z, radius, kind], i) => {
		const mesh = meshOf(buildIslet(30 + i, radius, kind), false);
		mesh.position.set(x, y, z);
		scene.add(mesh);
		return mesh;
	});

	// Slow specks in the air, as in the app's sky.
	const SPECKS = 260;
	const speckAt = new Float32Array(SPECKS * 3);
	const speckTint = new Float32Array(SPECKS * 3);
	const speckRng = mulberry32(5);
	const tints = [0xf48fb1, 0xffd23f, 0xff9f43, 0xffffff, 0xe5484d].map((c) => new THREE.Color(c));
	for (let i = 0; i < SPECKS; i++) {
		speckAt.set([(speckRng() * 2 - 1) * 260, -60 + speckRng() * 220, -260 + speckRng() * 300], i * 3);
		tints[i % tints.length].toArray(speckTint, i * 3);
	}
	const speckGeometry = new THREE.BufferGeometry();
	speckGeometry.setAttribute("position", new THREE.BufferAttribute(speckAt, 3));
	speckGeometry.setAttribute("color", new THREE.BufferAttribute(speckTint, 3));
	const specks = new THREE.Points(speckGeometry, new THREE.PointsMaterial({ size: 1.3, vertexColors: true, transparent: true, opacity: 0.85 }));
	scene.add(specks);
	if (only) {
		for (const thing of [...clouds, ...islets, specks]) thing.visible = false;
		for (const p of places) p.group.visible = p.id === only;
		lamp.visible = false;
		scene.fog = null;
	}

	/* ------------------------------------------------- layout and camera */

	// Wide screens get the islands side by side; tall ones get them stacked up the sky.
	const LAYOUTS: Record<"wide" | "tall", { at: Record<string, Vec>; centre: Vec; view: { w: number; h: number } }> = {
		wide: {
			at: { "focus-garden": [-18, -4, 34], venn: [84, 2, 30], explorer: [104, 44, -50], snapcraft: [50, 72, -40], faststarter: [126, 2, 58] },
			centre: [24, 18, -6],
			view: { w: 286, h: 204 },
		},
		tall: {
			at: { "focus-garden": [-6, -20, 40], venn: [14, 30, -10], explorer: [32, 86, -30], snapcraft: [-38, 40, -20], faststarter: [44, 4, 30] },
			centre: [0, 34, -14],
			view: { w: 104, h: 330 },
		},
	};
	let layout = LAYOUTS.wide;
	const rig = {
		target: new THREE.Vector3(),
		yaw: -0.16,
		pitch: 0.42,
		dist: 400,
		shift: new THREE.Vector2(),
		goal: { target: new THREE.Vector3(), yaw: -0.16, pitch: 0.42, dist: 400, shift: new THREE.Vector2() },
	};
	let chosen = "home";
	let width = 1;
	let height = 1;

	const fitDistance = (w: number, h: number) => {
		const v = THREE.MathUtils.degToRad(camera.fov) / 2;
		return Math.max(h / 2 / Math.tan(v), w / 2 / (Math.tan(v) * camera.aspect));
	};

	function arrange() {
		width = canvas.clientWidth || innerWidth;
		height = canvas.clientHeight || innerHeight;
		renderer.setSize(width, height, false);
		camera.aspect = width / height;
		layout = camera.aspect < 0.85 ? LAYOUTS.tall : LAYOUTS.wide;
		for (const p of places) p.group.position.set(...(layout.at[p.id] ?? [0, 0, 0])).add(p.aside);
		sun.target.position.set(...layout.centre);
		sun.position.set(layout.centre[0] - 170, layout.centre[1] + 260, layout.centre[2] + 190);
		renderer.shadowMap.needsUpdate = true;
		aim(false);
	}

	// Point the camera at whatever is chosen. The info card covers part of the window, so the view slides clear of it.
	function aim(fly = true) {
		const p = places.find((x) => x.id === chosen);
		const g = rig.goal;
		const tall = layout === LAYOUTS.tall;
		if (p && only) {
			g.target.set(0, p.frame.lift, 0);
			g.dist = fitDistance(p.frame.w, p.frame.h) * 1.5;
			g.pitch = 0.46;
			g.shift.set(0, 0);
		} else if (p) {
			g.target.set(...layout.at[p.id]).add(new THREE.Vector3(0, p.frame.lift, 0));
			g.dist = fitDistance(p.frame.w, p.frame.h) * (tall ? 1.5 : 1.42);
			g.pitch = 0.46;
			g.shift.set(tall ? 0 : -0.17, tall ? 0.17 : 0);
		} else {
			g.target.set(...layout.centre);
			g.dist = fitDistance(layout.view.w, layout.view.h);
			g.pitch = 0.42;
			g.shift.set(tall ? 0 : -0.06, tall ? -0.015 : 0);
		}
		g.yaw = -0.16;
		if (!fly || still) {
			rig.target.copy(g.target);
			rig.shift.copy(g.shift);
			rig.dist = g.dist;
			rig.pitch = g.pitch;
			rig.yaw = g.yaw;
		}
	}

	function choose(id: string) {
		chosen = places.some((p) => p.id === id) ? id : "home";
		root.dataset.place = chosen;
		for (const card of document.querySelectorAll<HTMLElement>(".card")) card.classList.toggle("is-on", card.id === chosen);
		for (const tag of tags.values()) tag.setAttribute("aria-current", String(tag.dataset.place === chosen));
		aim();
	}

	/* --------------------------------------------------------- name tags */

	const tags = new Map<string, HTMLElement>();
	for (const tag of document.querySelectorAll<HTMLElement>(".tag[data-place]")) tags.set(tag.dataset.place ?? "", tag);
	const spot = new THREE.Vector3();
	function pin() {
		for (const p of places) {
			const tag = tags.get(p.id);
			if (!tag) continue;
			spot.copy(p.tag).applyMatrix4(p.group.matrixWorld).project(camera);
			const seen = spot.z < 1 && Math.abs(spot.x) < 1.15 && Math.abs(spot.y) < 1.15;
			tag.style.visibility = seen ? "visible" : "hidden";
			tag.style.transform = `translate(-50%, -100%) translate(${((spot.x + 1) / 2) * width}px, ${((1 - spot.y) / 2) * height}px)`;
		}
	}

	/* ------------------------------------------------------------- frame */

	const drift = { snapcraft: 0, faststarter: 2.4 };
	const away = new THREE.Vector3();
	function frame(t: number, dt: number) {
		const ease = 1 - Math.exp(-dt * 3.2);
		const g = rig.goal;
		rig.target.lerp(g.target, ease);
		rig.shift.lerp(g.shift, ease);
		rig.dist += (g.dist - rig.dist) * ease;
		rig.pitch += (g.pitch - rig.pitch) * ease;
		rig.yaw += (g.yaw - rig.yaw) * ease;

		const sway = still ? 0 : Math.sin(t * 0.17) * 0.05;
		const yaw = rig.yaw + sway;
		camera.position.set(
			rig.target.x + Math.sin(yaw) * Math.cos(rig.pitch) * rig.dist,
			rig.target.y + Math.sin(rig.pitch) * rig.dist,
			rig.target.z + Math.cos(yaw) * Math.cos(rig.pitch) * rig.dist,
		);
		camera.lookAt(rig.target);
		camera.setViewOffset(width, height, rig.shift.x * width, rig.shift.y * height, width, height);

		// When a place is chosen, the others drift out of its way; they come back for the whole sky.
		const centre = places.find((p) => p.id === chosen);
		let moving = false;
		for (const p of places) {
			const home = only ? ([0, 0, 0] as Vec) : (layout.at[p.id] ?? [0, 0, 0]);
			away.set(0, 0, 0);
			if (centre && p !== centre && !only) {
				const from = layout.at[centre.id];
				away.set(home[0] - from[0], (home[1] - from[1]) * 0.6, home[2] - from[2]).normalize().multiplyScalar(170);
			}
			if (p.aside.distanceToSquared(away) > 0.01) {
				still ? p.aside.copy(away) : p.aside.lerp(away, ease);
				moving = true;
			}
			p.group.position.set(home[0], home[1], home[2]).add(p.aside);
			// Balloons also wander and bob. They carry the older work, so they keep moving on.
			const phase = drift[p.id as keyof typeof drift];
			if (phase !== undefined && !still) {
				p.group.position.x += Math.sin(t * 0.11 + phase) * 12;
				p.group.position.y += Math.sin(t * 0.5 + phase) * 2.4;
				p.group.position.z += Math.cos(t * 0.09 + phase) * 9;
				p.group.rotation.y = Math.sin(t * 0.2 + phase) * 0.4;
				if (p === centre) g.target.copy(p.group.position).y += p.frame.lift;
			}
		}
		if (moving) renderer.shadowMap.needsUpdate = true;

		// Decoration only moves for visitors who have not asked for reduced motion (or ?still).
		// In the still mode everything holds one pose: the tree fully grown, the marker resting.
		if (still) {
			marker.position.y = 27;
			grow(1);
		} else {
			for (const cloud of clouds) {
				cloud.position.x += cloud.userData.speed * dt;
				if (cloud.position.x > 360) cloud.position.x = -360;
			}
			islets.forEach((islet, i) => {
				islet.position.y += Math.sin(t * 0.4 + i * 1.7) * 0.01;
			});
			lamp.rotation.y = t * 0.5;
			marker.position.y = 27 + Math.sin(t * 2.2) * 0.8;
			marker.rotation.y = t * 1.2;
			const flip = Math.floor(t * 5) % 2;
			falls.forEach((pair) => {
				pair[0].visible = flip === 0;
				pair[1].visible = flip === 1;
			});

			// A session's worth of growing takes about half a minute here, then the next tree starts.
			const cycle = (t % 40) / 40;
			const round = Math.floor(t / 40);
			if (round !== growth.species) growth = { species: round, progress: 0, shown: -1 };
			grow(Math.min(1, cycle / 0.78));

			const at = speckGeometry.getAttribute("position") as THREE.BufferAttribute;
			for (let i = 0; i < SPECKS; i++) {
				let y = at.getY(i) - dt * (2 + (i % 5));
				if (y < -70) y = 160;
				at.setY(i, y);
				at.setX(i, at.getX(i) + Math.sin(t * 0.6 + i) * dt * 2);
			}
			at.needsUpdate = true;
		}

		renderer.render(scene, camera);
		pin();
	}

	/* ------------------------------------------------------------- input */

	const ray = new THREE.Raycaster();
	const pointer = new THREE.Vector2();
	const hit = (e: PointerEvent) => {
		const box = canvas.getBoundingClientRect();
		// Undo the view shift, which slides the picture without moving the camera.
		pointer.set(
			(((e.clientX - box.left + rig.shift.x * width) / width) * 2 - 1),
			-(((e.clientY - box.top + rig.shift.y * height) / height) * 2 - 1),
		);
		camera.clearViewOffset();
		camera.updateProjectionMatrix();
		ray.setFromCamera(pointer, camera);
		const first = ray.intersectObjects(places.map((p) => p.group), true)[0];
		let node: THREE.Object3D | null = first?.object ?? null;
		while (node && !node.userData.place) node = node.parent;
		return (node?.userData.place as string) ?? null;
	};
	let drag: { x: number; y: number; moved: number } | null = null;
	canvas.addEventListener("pointerdown", (e) => {
		drag = { x: e.clientX, y: e.clientY, moved: 0 };
		canvas.setPointerCapture?.(e.pointerId);
	});
	canvas.addEventListener("pointermove", (e) => {
		if (!drag) {
			canvas.style.cursor = hit(e) ? "pointer" : "grab";
			return;
		}
		const dx = e.clientX - drag.x;
		const dy = e.clientY - drag.y;
		drag.moved += Math.abs(dx) + Math.abs(dy);
		drag.x = e.clientX;
		drag.y = e.clientY;
		rig.goal.yaw -= dx * 0.005;
		rig.goal.pitch = THREE.MathUtils.clamp(rig.goal.pitch + dy * 0.004, 0.12, 1.1);
		root.classList.add("has-looked");
	});
	const release = (e: PointerEvent) => {
		const was = drag;
		drag = null;
		if (!was || was.moved > 6) return;
		const id = hit(e);
		location.hash = id && id !== chosen ? id : "home";
	};
	canvas.addEventListener("pointerup", release);
	canvas.addEventListener("pointercancel", () => { drag = null; });
	canvas.addEventListener("wheel", (e) => {
		e.preventDefault();
		const p = places.find((x) => x.id === chosen);
		const base = p ? fitDistance(p.frame.w, p.frame.h) * 1.42 : fitDistance(layout.view.w, layout.view.h);
		rig.goal.dist = THREE.MathUtils.clamp(rig.goal.dist * (1 + e.deltaY * 0.0012), base * 0.55, base * 1.5);
	}, { passive: false });

	addEventListener("hashchange", () => choose(decodeURIComponent(location.hash.slice(1))));
	addEventListener("keydown", (e) => {
		if (e.key === "Escape" && chosen !== "home") location.hash = "home";
	});
	let resizing = 0;
	addEventListener("resize", () => {
		clearTimeout(resizing);
		resizing = setTimeout(arrange, 120);
	});

	/* ------------------------------------------------------------- start */

	chosen = only ?? decodeURIComponent(location.hash.slice(1));
	arrange();
	choose(chosen);
	aim(false);
	scene.updateMatrixWorld(true);
	frame(0, 0);
	root.classList.add("has-world");

	let last = performance.now();
	const zero = last;
	const loop = (now: number) => {
		frame((now - zero) / 1000, Math.min(0.05, (now - last) / 1000));
		last = now;
		requestAnimationFrame(loop);
	};
	requestAnimationFrame(loop);
	// For taking pictures of a given moment (the picture tool cannot wait for animation frames).
	(window as unknown as { salemkode: unknown }).salemkode = {
		frame(seconds: number) {
			for (let i = 0; i < 40; i++) frame(seconds, 0.05);
		},
		/** The current picture, with a clear background. */
		png() {
			return canvas.toDataURL("image/png");
		},
	};
}

/** A waterfall's sheet in its own frame: x points out from the cliff, y up, z across. After Focus Garden's. */
function curtain(width: number, phase: number) {
	const positions: number[] = [];
	const normals: number[] = [];
	const colors: number[] = [];
	const indices: number[] = [];
	const top = new THREE.Color(0x2f9fd8);
	const bottom = new THREE.Color(0xcdeefa);
	const color = new THREE.Color();
	const FACES: [number[], number[][]][] = [
		[[1, 0, 0], [[1, -1, -1], [1, 1, -1], [1, 1, 1], [1, -1, 1]]],
		[[-1, 0, 0], [[-1, -1, 1], [-1, 1, 1], [-1, 1, -1], [-1, -1, -1]]],
		[[0, 1, 0], [[-1, 1, 1], [1, 1, 1], [1, 1, -1], [-1, 1, -1]]],
		[[0, -1, 0], [[-1, -1, -1], [1, -1, -1], [1, -1, 1], [-1, -1, 1]]],
		[[0, 0, 1], [[1, -1, 1], [1, 1, 1], [-1, 1, 1], [-1, -1, 1]]],
		[[0, 0, -1], [[-1, -1, -1], [-1, 1, -1], [1, 1, -1], [1, -1, -1]]],
	];
	const box = (cx: number, cy: number, cz: number, sx: number, sy: number, sz: number, shade: number) => {
		for (const [normal, corners] of FACES) {
			const base = positions.length / 3;
			const light = normal[1] > 0 ? 1.08 : normal[0] !== 0 ? 1 : 0.9;
			for (const [x, y, z] of corners) {
				positions.push(cx + (x * sx) / 2, cy + (y * sy) / 2, cz + (z * sz) / 2);
				normals.push(normal[0], normal[1], normal[2]);
				colors.push(Math.min(1, color.r * shade * light), Math.min(1, color.g * shade * light), Math.min(1, color.b * shade * light));
			}
			indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
		}
	};
	const STEP = 3;
	const DEPTH = 108;
	color.copy(top).lerp(new THREE.Color(0xffffff), 0.25);
	box(0.4, -0.6, 0, 2, 1.6, width, 1);
	for (let y0 = 0; y0 < DEPTH; y0 += STEP) {
		const f = y0 / DEPTH;
		color.copy(top).lerp(bottom, f ** 1.4);
		const stripe = (y0 / STEP + phase) % 2 ? 0.9 : 1.06;
		box(Math.sqrt((y0 + STEP / 2) / 150) * 7 + 1, -(y0 + STEP / 2), 0, 1.8 + f * 1.6, STEP + 0.02, width * (1 + f * 0.6), stripe);
	}
	const geometry = new THREE.BufferGeometry();
	geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
	geometry.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
	geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
	geometry.setIndex(indices);
	return geometry;
}

if (canvas) {
	try {
		start(canvas);
	} catch (error) {
		// No WebGL: the page stays a plain list of the same places.
		console.warn("The world could not be drawn.", error);
	}
}
