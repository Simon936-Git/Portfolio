# Portfolio

Junior gameplay programmer portfolio (React + Vite).

## GitHub Pages

Live URL: **https://theniceone346.github.io/Portfolio/**

### Why the page was blank

GitHub was serving the **source** `index.html`, which loads `/src/main.tsx`. That only works with `npm run dev` — browsers on GitHub Pages cannot run TypeScript/JSX directly.

### Fix (one-time in GitHub)

1. Push this repo to `main` (includes `.github/workflows/deploy.yml`).
2. On GitHub: **Settings → Pages → Build and deployment → Source** → select **GitHub Actions**.
3. Wait for the **Deploy to GitHub Pages** workflow to finish (Actions tab).

The workflow runs `npm run build` and publishes the `dist/` folder. Asset paths use `base: '/Portfolio/'` in `vite.config.ts`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Customize

Edit files in `src/data/` — `profile.ts`, `projects.ts`, `skills.ts`, `codeSample.ts`.

Add your resume as `public/resume.pdf`.
