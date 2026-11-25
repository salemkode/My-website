# The island pictures

The pictures in `../images/` (the islands, balloons and clouds) are drawn from this scene. It uses the voxel engine from Focus Garden, copied unchanged into `src/garden/` (see the `NOTICE.md` there). The models that are only on this site are in `src/places.ts`: Venn's island and the lighthouse.

None of this is published. The site only uses the saved pictures.

## Draw a picture

```sh
bun install
bun run build                        # writes world.js
python3 -m http.server 4173          # from the repository root
```

Open `http://localhost:4173/art/render.html?only=venn`. The place is drawn alone on a clear background, and **Save this picture** downloads it as a PNG.

Places: `focus-garden`, `venn`, `explorer`, `snapcraft`, `faststarter`, `cloud-41`, `cloud-44`, `cloud-46`.

Crop the PNG to its edges, convert it to WebP, and put it in `../images/`.

## Add a place

1. Build its model in `src/places.ts` with `VoxelModel`, or use one from `src/garden/models.ts`.
2. In `src/world.ts`, add it with `place(id, ...)` or `balloon(id, ...)`.
3. Run `bun run check` and `bun run build`, then draw it as above.

`world.ts` can also show every place together as one sky you can drag around, which is how this page started; open `render.html` without `?only`.
