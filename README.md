# Simon Olsson — Gameplay Portfolio

**Live:** https://theniceone346.github.io/Portfolio/

## GitHub Pages setup

1. Push to `main` — GitHub Actions builds and deploys automatically.
2. On GitHub: **Settings → Pages → Build and deployment → Source** → **GitHub Actions**.
3. Wait for the **Deploy to GitHub Pages** workflow to finish, then hard-refresh (Ctrl+F5).

Do **not** use `main` branch as the source — that serves raw source code and causes a blank page.

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
