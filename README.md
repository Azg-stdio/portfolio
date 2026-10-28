# Miguel Arbeláez - portfolio

Static site, no build step. Plain HTML, CSS and JavaScript. GitHub Pages serves the `main` branch as is (`.nojekyll` keeps Jekyll out of it), so every push to `main` is live a minute later.

## Edit

- **Projects:** `js/projects.js`. One object per project. `section` puts it under *Games*, *Web* or *Now Building*; `intro`, `text`, `genre`, `role` and `links` fill the project window. The comment at the top of the file lists every field.
- **Images:** `assets/img/projects/`. Thumbnails are 640x400 WebP named `<id>-thumb.webp`, gallery pictures are `<id>-1.webp`, `<id>-2.webp` and so on, up to 1200 px wide. A project without `thumb` gets the sky and clouds tile. The drifting clouds behind the page are `assets/img/hero/sky-far.webp` and `sky-near.webp`.
- **Copy:** hero, about and contact live in `index.html`.
- **Look:** `css/style.css`. The colour tokens are at the top, the night palette right under them. Every container uses the `.box` class (the dialog box frame).
- **CV:** replace `assets/MiguelArbelaez_CV.pdf`.
- **Music:** `assets/audio/sadday.mp3`, only loaded when the play button is pressed.

## Run locally

```sh
python -m http.server 8080
```

Add `?theme=night` or `?theme=day` to the URL to force a theme.

## Publish

Push to `main`. The first time, in the repository settings under *Pages*, set Source to *Deploy from a branch*, branch `main`, folder `/ (root)`.
