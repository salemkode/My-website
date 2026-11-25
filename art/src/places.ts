// The places that are not in Focus Garden's own model set, built with its voxel engine
// and in its manner: floating land with banded soil, small buildings, one cube at a time.
import { hash3, noise2, VoxelModel } from "./garden/voxel";

const pick = (palette: number[], h: number) =>
	palette[Math.min(palette.length - 1, Math.floor(h * palette.length))];

type Strata = [thickness: number, color: number][];

function strataColor(strata: Strata, depth: number) {
	let d = depth;
	for (const [thickness, color] of strata) {
		if (d < thickness) return color;
		d -= thickness;
	}
	return strata[strata.length - 1][1];
}

interface Land {
	/** 0 at the middle of the land, 1 at its rim, more outside it. */
	rim: (x: number, z: number) => number;
	/** Half-size of the box to scan. */
	reach: number;
	/** How far the underside hangs below the middle. */
	depth: number;
	top: (x: number, z: number) => number;
	strata: Strata;
	stone: number;
	drip: number[];
	seed: number;
}

/** A slab of floating land: a surface over banded soil that tapers into a ragged underside. */
function land(model: VoxelModel, o: Land) {
	for (let x = -o.reach; x <= o.reach; x++) {
		for (let z = -o.reach; z <= o.reach; z++) {
			const d = o.rim(x, z);
			if (d > 1) continue;
			const edge = 1 - d;
			const broad = noise2(x * 0.09, z * 0.09, o.seed + 11);
			const fine = noise2(x * 0.3, z * 0.3, o.seed + 23);
			let depth = Math.round(3 + fine * 3 + edge ** 0.6 * o.depth * (0.55 + broad * 0.6));
			if (d < 0.88 && hash3(x, o.seed + 99, z) < 0.05) depth += 2 + Math.floor(hash3(z, o.seed, x) * 5);
			const wobble = Math.round(noise2(x * 0.1 + 50, z * 0.1 + 50, o.seed + 3) * 3);
			for (let y = 0; y >= -depth; y--) {
				let color = y === 0 ? o.top(x, z) : strataColor(o.strata, Math.max(0, -y - 2 + wobble));
				if (y < 0 && noise2(x * 0.45 + y, z * 0.45 - y, o.seed + 77) > 0.86) color = o.stone;
				model.set(x, y, z, color);
			}
			// The surface drips a little way over the cliff.
			if (d > 0.86 && hash3(x, o.seed + 7, z) < 0.5) {
				const len = 1 + Math.floor(hash3(x, o.seed + 8, z) * 3);
				for (let y = -1; y >= -len; y--) {
					if (model.has(x, y, z)) model.set(x, y, z, pick(o.drip, hash3(x, y, z)));
				}
			}
		}
	}
}

const wobblyEllipse = (rx: number, rz: number, phase: number) => (x: number, z: number) => {
	const a = Math.atan2(z / rz, x / rx);
	const rim = 1 + 0.07 * Math.sin(3 * a + phase) + 0.05 * Math.sin(5 * a + phase * 2) + 0.03 * Math.sin(9 * a + 2.1);
	return Math.hypot(x / rx, z / rz) / rim;
};

// ------------------------------------------------------------------ home

const SAND = [0xe9cf9a, 0xe0c48a, 0xf0d9a8];
const SAND_DARK = [0xd3b377, 0xc9a86c];
const MUD = [0xc99f69, 0xbf945e, 0xd3aa73, 0xc4995f];
const MUD_LOW = [0xae8453, 0xa67c4c];
const LIME = 0xf6eedd;
const LIME_SHADE = 0xe6dcc6;
const SHUTTER = [0x5c3b22, 0x4a2f1c, 0x6b4527];
const HOME_STRATA: Strata = [
	[2, 0xcfa468],
	[2, 0xb98a50],
	[3, 0xdcb77d],
	[2, 0xe8cd98],
	[3, 0xb27c43],
	[3, 0x93633a],
	[99, 0x714a2b],
];

/**
 * A tower house of the Hadhramaut valley: mud brick that leans in as it rises,
 * shuttered windows on every floor, and a top painted white with lime.
 */
function towerHouse(m: VoxelModel, cx: number, cz: number, halfX: number, halfZ: number, floors: number, seed: number) {
	const FLOOR = 4;
	const top = floors * FLOOR + 1;
	const whiteFrom = top - (floors > 5 ? 5 : 3);
	const narrowAt = Math.floor(floors * 0.55) * FLOOR + 1;

	// A wider foot, the way the real walls thicken toward the ground.
	for (let x = -halfX - 1; x <= halfX + 1; x++) {
		for (let z = -halfZ - 1; z <= halfZ + 1; z++) {
			for (let y = 1; y <= 2; y++) m.set(cx + x, y, cz + z, pick(MUD_LOW, hash3(x + seed, y, z)));
		}
	}
	const half = (y: number) => (y > narrowAt ? [halfX - 1, halfZ - 1] : [halfX, halfZ]);
	for (let y = 1; y <= top; y++) {
		const [hx, hz] = half(y);
		for (let x = -hx; x <= hx; x++) {
			for (let z = -hz; z <= hz; z++) {
				const white = y > whiteFrom || y === narrowAt + 1;
				m.set(cx + x, y, cz + z, white ? (hash3(x, y + seed, z) > 0.8 ? LIME_SHADE : LIME) : pick(MUD, hash3(x + seed, y, z + seed)));
			}
		}
	}

	// Windows: a shutter set one cube into the wall, with a white lintel on the upper floors.
	for (let f = 1; f < floors; f++) {
		const y = f * FLOOR + 2;
		const [hx, hz] = half(y);
		const lintel = y + 2 <= whiteFrom && f >= floors - 3;
		const open = (x: number, z: number, nx: number, nz: number) => {
			for (let k = 0; k < 2; k++) {
				m.remove(cx + x, y + k, cz + z);
				m.set(cx + x - nx, y + k, cz + z - nz, pick(SHUTTER, hash3(x + seed, y + k, z)));
			}
			if (lintel) m.set(cx + x, y + 2, cz + z, LIME);
		};
		for (let i = -hx + 1; i <= hx - 1; i += 2) {
			if (hash3(i + seed, f, 1) > 0.12) open(i, hz, 0, 1);
			if (hash3(i + seed, f, 2) > 0.12) open(i, -hz, 0, -1);
		}
		for (let i = -hz + 1; i <= hz - 1; i += 2) {
			if (hash3(i + seed, f, 3) > 0.12) open(hx, i, 1, 0);
			if (hash3(i + seed, f, 4) > 0.12) open(-hx, i, -1, 0);
		}
	}

	// The door, carved wood in a white surround, on the side that faces the front of the island.
	for (let y = 1; y <= 3; y++) {
		m.remove(cx, y, cz + halfZ + 1);
		m.remove(cx, y, cz + halfZ);
		m.set(cx, y, cz + halfZ - 1, y === 2 ? 0x7a4a27 : 0x5c3b22);
		m.set(cx - 1, y, cz + halfZ + 1, LIME);
		m.set(cx + 1, y, cz + halfZ + 1, LIME);
	}
	for (let x = -1; x <= 1; x++) m.set(cx + x, 4, cz + halfZ + 1, LIME);

	// Roof: a parapet with raised corners and a small room up top.
	const [hx, hz] = half(top);
	for (let x = -hx; x <= hx; x++) {
		for (let z = -hz; z <= hz; z++) {
			const onEdge = Math.abs(x) === hx || Math.abs(z) === hz;
			if (!onEdge) continue;
			m.set(cx + x, top + 1, cz + z, LIME);
			const corner = Math.abs(x) === hx && Math.abs(z) === hz;
			if (corner || (x + z + seed) % 3 === 0) m.set(cx + x, top + 2, cz + z, LIME);
			if (corner) m.set(cx + x, top + 3, cz + z, LIME);
		}
	}
	const rx = seed % 2 ? hx - 2 : -hx + 2;
	for (let x = -1; x <= 1; x++) {
		for (let z = -1; z <= 1; z++) {
			for (let y = 1; y <= 3; y++) m.set(cx + rx + x, top + y, cz - hz + 2 + z, y === 3 ? LIME : LIME_SHADE);
		}
	}
	m.remove(cx + rx, top + 2, cz - hz + 3);
	m.set(cx + rx, top + 2, cz - hz + 2, SHUTTER[0]);
}

const FROND = [0x3f8f3a, 0x4fa244, 0x347f35, 0x5cab3f];

function datePalm(m: VoxelModel, x: number, z: number, height: number, seed: number) {
	const lean = seed % 2 ? 1 : -1;
	let tx = x;
	for (let y = 1; y <= height; y++) {
		tx = x + Math.round(lean * (y / height) ** 2 * 2);
		m.set(tx, y, z, y % 2 ? 0x8d6b45 : 0x775737);
	}
	const top = height + 1;
	m.set(tx, top, z, FROND[0]);
	const arms = [
		[1, 0, 5], [-1, 0, 5], [0, 1, 5], [0, -1, 5],
		[1, 1, 3], [-1, 1, 3], [1, -1, 3], [-1, -1, 3],
	];
	for (const [dx, dz, len] of arms) {
		for (let k = 1; k <= len; k++) {
			// Fronds lift out of the crown, then droop at the tip.
			const lift = k === 1 ? 1 : k <= 3 ? 1 : k === 4 ? 0 : -1;
			m.set(tx + dx * k, top + lift, z + dz * k, pick(FROND, hash3(tx + dx * k, seed, z + dz * k)));
		}
	}
	m.set(tx + 1, top - 1, z, 0xd98a2b);
	m.set(tx, top - 1, z + 1, 0xc9741f);
	m.set(tx - 1, top - 1, z - 1, 0xe09a3a);
}

/** My own island: a handful of tower houses from Shibam, where I live, in a ring of date palms. */
export function buildHome(): VoxelModel {
	const m = new VoxelModel();
	const rim = wobblyEllipse(27, 22, 0.7);
	const plots = (x: number, z: number) => z > 9 && z < 17 && Math.abs(x + 2) < 12 && (x + 40) % 6 > 0 && z !== 13;
	land(m, {
		rim,
		reach: 32,
		depth: 26,
		seed: 3,
		strata: HOME_STRATA,
		stone: 0xa9998a,
		drip: SAND_DARK,
		top: (x, z) => {
			if (plots(x, z)) return (x + z) % 2 ? 0x6fb24a : 0x5fa13f;
			const patch = noise2(x * 0.2, z * 0.2, 9);
			return patch > 0.7 ? pick(SAND_DARK, hash3(x, 1, z)) : pick(SAND, hash3(x, 2, z));
		},
	});

	// Houses stand shoulder to shoulder with one-cube alleys between them.
	towerHouse(m, -9, -15, 3, 3, 7, 7);
	towerHouse(m, 7, -15, 3, 3, 8, 8);
	towerHouse(m, -11, -6, 3, 3, 6, 1);
	towerHouse(m, -2, -8, 3, 4, 9, 2);
	towerHouse(m, 7, -6, 3, 3, 7, 3);
	towerHouse(m, 15, -3, 3, 3, 5, 4);
	towerHouse(m, -6, 3, 4, 3, 7, 5);
	towerHouse(m, 4, 3, 3, 3, 5, 6);

	// Green crops in the irrigated plots, and a low mud wall around them.
	for (let x = -14; x <= 10; x++) {
		for (let z = 9; z <= 17; z++) {
			if (rim(x, z) > 0.92) continue;
			const edge = x === -14 || x === 10 || z === 17;
			if (edge && (x + z) % 5 !== 0) m.set(x, 1, z, pick(MUD_LOW, hash3(x, 5, z)));
			else if (plots(x, z) && hash3(x, 6, z) > 0.45) m.set(x, 1, z, hash3(x, 7, z) > 0.5 ? 0x4f9e2c : 0x7cc35a);
		}
	}

	const palms = [
		[-21, 2, 9], [-18, 11, 11], [15, 9, 10], [20, 3, 8], [13, 15, 12], [-10, 19, 9], [22, -9, 10], [-20, -9, 8], [3, 19, 7],
	];
	palms.forEach(([x, z, h], i) => {
		if (rim(x, z) < 0.9) datePalm(m, x, z, h, i + 1);
	});

	// Loose stones and dry shrubs on the open sand.
	for (let x = -27; x <= 27; x++) {
		for (let z = -22; z <= 22; z++) {
			if (rim(x, z) > 0.9 || m.has(x, 1, z) || plots(x, z)) continue;
			const h = hash3(x, 31, z);
			if (h < 0.012) m.set(x, 1, z, 0xa9998a);
			else if (h > 0.985) m.set(x, 1, z, 0x8a9a4a);
		}
	}
	return m;
}

// ------------------------------------------------------------------ Venn

const VENN_STRATA: Strata = [
	[2, 0x8f929c],
	[2, 0x787b87],
	[3, 0xa6a9b2],
	[2, 0x6c6f7b],
	[3, 0x8a8d98],
	[99, 0x4f525d],
];
const TURF_A = [0x74bd4d, 0x6db446, 0x84c95a];
const TURF_B = [0xe8c458, 0xdfb84b, 0xf0d06a];
const MARBLE = [0xf7f5f0, 0xeceae4, 0xffffff];

export const VENN = { r: 17, ax: -10, bx: 10 };

function cottage(m: VoxelModel, cx: number, cz: number, roof: number[], door: [number, number]) {
	for (let x = -2; x <= 2; x++) {
		for (let z = -2; z <= 2; z++) {
			for (let y = 1; y <= 3; y++) {
				const wall = Math.abs(x) === 2 || Math.abs(z) === 2;
				if (wall) m.set(cx + x, y, cz + z, y === 1 ? 0xd9cdb4 : 0xf6ecd4);
			}
		}
	}
	for (let k = 0; k <= 3; k++) {
		for (let x = -3 + k; x <= 3 - k; x++) {
			for (let z = -3 + k; z <= 3 - k; z++) m.set(cx + x, 4 + k, cz + z, roof[k % roof.length]);
		}
	}
	const [dx, dz] = door;
	m.set(cx + dx * 2, 1, cz + dz * 2, 0x6b3f22);
	m.set(cx + dx * 2, 2, cz + dz * 2, 0x6b3f22);
	// A lit window on each side of the door.
	const [sx, sz] = [dz, dx];
	m.set(cx + dx * 2 + sx, 2, cz + dz * 2 + sz, 0xffe08a);
	m.set(cx + dx * 2 - sx, 2, cz + dz * 2 - sz, 0xffe08a);
}

/**
 * Venn's island is the diagram itself: two round commons that overlap.
 * Each side keeps its own houses; the shared money sits where the circles meet.
 */
export function buildVenn(): VoxelModel {
	const m = new VoxelModel();
	const { r, ax, bx } = VENN;
	const da = (x: number, z: number) => Math.hypot(x - ax, z) / r;
	const db = (x: number, z: number) => Math.hypot(x - bx, z) / r;
	const wob = (x: number, z: number) => 1 + (noise2(x * 0.3, z * 0.3, 5) - 0.5) * 0.08;
	land(m, {
		rim: (x, z) => Math.min(da(x, z), db(x, z)) / wob(x, z),
		reach: 30,
		depth: 22,
		seed: 5,
		strata: VENN_STRATA,
		stone: 0xc9ccd3,
		drip: [0x5e9a3c, 0x6aa845],
		top: (x, z) => {
			const a = da(x, z);
			const b = db(x, z);
			// Each circle is edged in pale stone, so both rings stay whole across the overlap.
			if (Math.abs(a - 0.86) < 0.045 || Math.abs(b - 0.86) < 0.045) return pick(MARBLE, hash3(x, 3, z));
			if (a < 0.86 && b < 0.86) return (x + z) % 2 ? 0xf7f5f0 : 0xe4e1da;
			if (a < b) return pick(TURF_A, hash3(x, 1, z));
			return pick(TURF_B, hash3(x, 2, z));
		},
	});

	// The shared vault: a small open pavilion over a chest of gold.
	for (let x = -3; x <= 3; x++) {
		for (let z = -3; z <= 3; z++) m.set(x, 1, z, Math.abs(x) === 3 || Math.abs(z) === 3 ? 0xdedbd3 : 0xf7f5f0);
	}
	for (const [x, z] of [[-3, -3], [3, -3], [-3, 3], [3, 3]]) {
		for (let y = 2; y <= 6; y++) m.set(x, y, z, 0xf7f5f0);
	}
	for (let k = 0; k <= 2; k++) {
		for (let x = -4 + k; x <= 4 - k; x++) {
			for (let z = -4 + k; z <= 4 - k; z++) m.set(x, 7 + k, z, k === 2 ? 0xf2c230 : k ? 0x2c2f38 : 0x3a3d47);
		}
	}
	for (let x = -1; x <= 1; x++) {
		for (let z = -1; z <= 0; z++) {
			m.set(x, 2, z, x === 0 ? 0xffd95a : 0xf2c230);
			m.set(x, 3, z, x === 0 ? 0x8a5a2c : 0xe0a82a);
		}
	}

	// Homes on each side, and a path from every door to the vault.
	const homes: [number, number, number[], [number, number]][] = [
		[-19, -6, [0x2f8f8a, 0x277c78], [1, 0]],
		[-17, 7, [0x3d9ea0, 0x2f8f8a], [1, 0]],
		[19, -6, [0xe07a2e, 0xc9652a], [-1, 0]],
		[17, 8, [0xd9553f, 0xc2452f], [-1, 0]],
	];
	const PATH = [0xe2cc97, 0xd8bf86, 0xead7a8];
	for (const [hx, hz, roof, door] of homes) {
		const steps = 40;
		const fromX = hx + door[0] * 3;
		for (let i = 0; i <= steps; i++) {
			const t = i / steps;
			const x = Math.round(fromX + (door[0] * 4 - fromX) * t);
			const z = Math.round(hz * (1 - t) ** 1.6);
			if (m.has(x, 0, z) && !m.has(x, 1, z)) m.set(x, 0, z, pick(PATH, hash3(x, 9, z)));
		}
		cottage(m, hx, hz, roof, door);
	}

	// Flowers and tufts, kept off the marble.
	for (let x = -30; x <= 30; x++) {
		for (let z = -20; z <= 20; z++) {
			const a = da(x, z);
			const b = db(x, z);
			if (Math.min(a, b) > 0.8 || (a < 0.9 && b < 0.9) || m.has(x, 1, z) || !m.has(x, 0, z)) continue;
			const h = hash3(x, 41, z);
			if (h < 0.03) m.set(x, 1, z, a < b ? 0xffffff : 0xe5484d);
			else if (h > 0.95) m.set(x, 1, z, a < b ? 0x4f9e2c : 0xc79a2e);
		}
	}
	return m;
}

// -------------------------------------------------------------- Explorer

/** Explorer's islet: a lighthouse, because an explorer is how you see what is out on the chain. */
export function buildLighthouse(): VoxelModel {
	const m = new VoxelModel();
	land(m, {
		rim: wobblyEllipse(10, 9, 2.2),
		reach: 13,
		depth: 15,
		seed: 9,
		strata: [[2, 0x8b5a33], [2, 0x74482a], [3, 0xcf7f3a], [2, 0xddb57f], [99, 0x5c3a22]],
		stone: 0x9d968a,
		drip: [0x55a530, 0x4a962a],
		top: (x, z) => pick([0x78c444, 0x6dba3b, 0x84cd4e], hash3(x, 1, z)),
	});
	const H = 20;
	for (let y = 1; y <= H; y++) {
		const r = y < 3 ? 3.6 : 3.1 - (y / H) * 1.1;
		const band = Math.floor((y - 1) / 4) % 2;
		for (let x = -4; x <= 4; x++) {
			for (let z = -4; z <= 4; z++) {
				if (Math.hypot(x, z) > r) continue;
				m.set(x, y, z, y < 3 ? 0x8f8a83 : band ? 0xd9453a : 0xf7f2e8);
			}
		}
	}
	m.set(0, 1, 3, 0x5c3b22);
	m.set(0, 2, 3, 0x5c3b22);
	m.remove(0, 9, 2);
	m.remove(0, 14, 2);
	// Gallery, lantern room and cap.
	for (let x = -3; x <= 3; x++) {
		for (let z = -3; z <= 3; z++) {
			if (Math.hypot(x, z) <= 3.4) m.set(x, H + 1, z, 0x3a3d47);
			if (Math.hypot(x, z) <= 3.4 && Math.hypot(x, z) > 2.5) m.set(x, H + 2, z, 0x3a3d47);
		}
	}
	for (let y = H + 2; y <= H + 4; y++) {
		for (let x = -1; x <= 1; x++) {
			for (let z = -1; z <= 1; z++) m.set(x, y, z, Math.abs(x) === 1 && Math.abs(z) === 1 ? 0x3a3d47 : 0xffe89a);
		}
	}
	for (let x = -2; x <= 2; x++) {
		for (let z = -2; z <= 2; z++) {
			if (Math.hypot(x, z) <= 2.3) m.set(x, H + 5, z, 0xd9453a);
		}
	}
	m.set(0, H + 6, 0, 0xd9453a);
	m.set(0, H + 7, 0, 0x3a3d47);
	// A keeper's shed and a few rocks.
	for (let x = 4; x <= 6; x++) {
		for (let z = -1; z <= 1; z++) {
			m.set(x, 1, z, 0xf6ecd4);
			m.set(x, 2, z, 0xf6ecd4);
			m.set(x, 3, z, 0xc2452f);
		}
	}
	m.set(5, 4, 0, 0xd9553f);
	m.set(-5, 1, 4, 0xa7a199);
	m.set(-6, 1, 3, 0x8f8a83);
	m.set(-5, 2, 4, 0xb5afa6);
	return m;
}

export const LIGHT_HEIGHT = 23;
