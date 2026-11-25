# Where these files come from

`voxel.ts`, `models.ts` and `tiers.ts` are copied unchanged from the garden package of
[Focus Garden](https://github.com/salemkode/focus-garden-next) (`packages/garden/src`).
They are the engine and the models that app uses to draw its valley: the island, the trees,
the cottage, the clouds and the balloons.

Focus Garden is released under the MIT License, copyright (c) 2025-2026 the Focus Garden contributors.

The site's own places (Shibam, Venn's island, the lighthouse) are in `../places.ts`,
built with the same `VoxelModel` so they sit in the same world.
