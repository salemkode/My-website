# salemkode.com

My site: a small sky of floating voxel islands, one for each thing I made.

![The sky](preview.png)

The world is drawn with the voxel engine from [Focus Garden](https://github.com/salemkode/focus-garden-next), so the island, trees, clouds, balloons and waterfalls are that app's own models. Venn's island, Shibam and the lighthouse are new models built with the same engine.

- Pick an island (or its name tag) to fly to it and read about it. The other islands drift out of the way.
- Drag to look around. Scroll to move closer or further.
- On the Focus Garden island, the tree under the gold marker grows cube by cube, then the next one starts.
- Older projects ride the balloons.

## Run it

```sh
bun install
bun run build     # writes world.js
bun run serve     # http://localhost:4173
```

`bun run dev` rebuilds `world.js` whenever a source file changes. `bun run check` type-checks.

Adding `?still` to the address draws the world without motion, which is also what visitors who ask for reduced motion get.

## Where things are

| File | What it holds |
| --- | --- |
| `index.html` | Every word on the site: my name, the name tags, and one card per place. |
| `styles.css` | The sky, the cards and the tags. |
| `src/world.ts` | The scene: where each island sits, the camera, the balloons, picking a place. |
| `src/places.ts` | The models that are mine alone: Shibam, Venn's island, the lighthouse. |
| `src/garden/` | Focus Garden's engine and models, copied unchanged (see its `NOTICE.md`). |
| `world.js` | The built bundle the page loads. It is committed, so the site deploys without a build. |

## Add a project

1. In `index.html`, add a name tag in `<nav class="places">` and a card in `<main class="cards">`. The tag's `data-place` and the card's `id` must match.
2. In `src/world.ts`, create the place with `place(id, ...)` (an island) or `balloon(id, ...)`, and give it a position in both `LAYOUTS` (wide screens and tall ones).
3. Run `bun run build` and commit `world.js` with the rest.

Without JavaScript or WebGL the page is a plain list of the same tags and cards.

## Deploy

Pushing to `main` publishes the folder to GitHub Pages through `.github/workflows/deploy.yml`. The workflow copies files; it does not build, so commit `world.js`.

## Credits

Three.js draws the scene. Type is [Handjet](https://fonts.google.com/specimen/Handjet) and [Readex Pro](https://fonts.google.com/specimen/Readex+Pro), both under the SIL Open Font License and served from `fonts/`.
