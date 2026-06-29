# Simon Olsson — Gameplay Portfolio

**Live:** https://theniceone346.github.io/Portfolio/

## GitHub Pages setup (fix blank/white page)

The site must serve the **built** files, not the source code.

1. Push to `main` — the Action builds and pushes to the `gh-pages` branch.
2. On GitHub: **Settings → Pages → Build and deployment → Source**
3. Choose **Deploy from a branch**
4. Branch: **`gh-pages`** · Folder: **`/ (root)`**
5. Save, wait ~1 minute, hard-refresh the site (Ctrl+F5).

If Source is set to `main` branch, the page stays white because browsers cannot run `/src/main.tsx` directly.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Edit content

- `src/data/profile.ts` — contact & bio
- `src/data/projects.ts` — projects & links
- `public/resume.pdf` — resume download
