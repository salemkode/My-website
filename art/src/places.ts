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
