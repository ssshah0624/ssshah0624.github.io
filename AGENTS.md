# Repository Guidelines

## Project Structure & Module Organization
- React source lives in `src/` with shared layout in `src/components/` and routes in `src/pages/`.
- App metadata is centralized in `src/data/apps.ts`; update it when adding or adjusting app pages.
- Static legal pages are served from `public/legal/<app-name>/` and referenced via `/legal/...` URLs.
- Static assets belong in `public/assets/images/`; keep filenames kebab-cased and optimized for the web.

## Build, Test, and Development Commands
- `npm run dev` — Vite dev server for local development.
- `npm run build` — production build for the React app.
- `npm run preview -- --port 4000` — local preview of the production build.
- `git diff --stat` — sanity-check how widespread a change is before pushing.

## Coding Style & Naming Conventions
- Use the existing component patterns in `src/pages/` and `src/components/`.
- Keep new routes and slugs lowercase kebab-case (e.g., `/apps/new-app`).
- When adding legal pages, mirror the naming in `public/legal/<app-name>/`.
- Keep text content concise and consistent with the brand tone.

## Testing Guidelines
- After building, preview with `npm run preview` and confirm navigation, assets, and legal pages load.
- Perform a click-through of primary navigation plus any new CTAs; broken or missing links are the most common regression.
- For content-only updates, validate spelling, brand names, and dates against the latest product requirements; document any open questions alongside your PR.

## Commit & Pull Request Guidelines
- Follow the existing history: short, imperative, lowercase subjects (`add clipit policy`, `update heardwell hero`).
- Squash incidental whitespace-only diffs before committing; each commit should map to one logical change (content, styling, or script).
- Pull requests should describe the user-facing impact, list any manual verification steps (build + browser check), and attach screenshots for visual tweaks or new sections.

## Content & Asset Workflow
- Store new screenshots or icons in `public/assets/images/`; update file references with relative paths to avoid GitHub Pages caching issues.
- When deprecating an app, document it in the PR description and adjust `src/data/apps.ts` plus any legal page links.
