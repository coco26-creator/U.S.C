# United Spirits Co. website

Standalone React + Vite site ready for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages deployment

This repo includes `.github/workflows/deploy.yml` for automatic deployment to GitHub Pages.

1. Push to `main`.
2. In GitHub repo settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
3. The workflow will build `dist/` and publish it.

Routing uses `HashRouter` so deep links work on GitHub Pages without server rewrites.
