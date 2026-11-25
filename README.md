# salemkode.com

My profile page: who I am, what I shipped, and how to reach me.

![The top of the page](preview.png)

It is a plain static page with no JavaScript. The islands are pictures, drawn once with the voxel engine from [Focus Garden](https://github.com/salemkode/focus-garden-next) and saved as images, so the page stays small and fast.

## Run it

```sh
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Where things are

| Path | What it holds |
| --- | --- |
| `index.html` | Every word on the page. |
| `styles.css` | All of the styling. |
| `images/` | The island pictures and the apps' own screenshots, as WebP. |
| `fonts/` | Handjet and Readex Pro. |
| `art/` | The 3D scene the island pictures are drawn from. Not part of the published site. |

## Change the page

- **Words and links:** edit `index.html`.
- **A new project:** copy one `<article class="case">` in the "Shipped" section, or one `<li>` in "Earlier work", and put its pictures in `images/`.
- **A new island picture:** see `art/README.md`.

## Deploy

Pushing to `main` publishes to GitHub Pages through `.github/workflows/deploy.yml`. The workflow copies `index.html`, `styles.css`, `favicon.svg`, `preview.png`, `fonts/` and `images/`; nothing is built.

## Credits

Type is [Handjet](https://fonts.google.com/specimen/Handjet) and [Readex Pro](https://fonts.google.com/specimen/Readex+Pro), both under the SIL Open Font License and served from `fonts/`.
