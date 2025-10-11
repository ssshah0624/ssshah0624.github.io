# Repository Guidelines

## Project Structure & Module Organization
- Root HTML entry points (`index.html`, `header.html`, `footer.html`) define the shared layout; update paired CSS in `styles.css` and behavior in `scripts.js`.
- App-specific landing pages live under `apps/<app-name>/*.html`; legal policies for each app sit in `legal/<app-name>/`.
- Static assets belong in `assets/images/`; keep filenames kebab-cased and optimized for the web.
- `build.py` inlines shared header/footer content across all HTML pages prior to publishing; treat it as the final step before committing.

## Build, Test, and Development Commands
- `python3 build.py` — inlines shared fragments into every HTML page; rerun after any header/footer edits or when new pages include fetch placeholders.
- `python3 -m http.server 4000` — quick local preview from the repo root; visit `http://localhost:4000` to confirm navigation, assets, and legal pages load.
- `git diff --stat` — sanity-check how widespread a change is before pushing; large diffs across many app/legal pages usually mean the build script needs attention.

## Coding Style & Naming Conventions
- HTML and CSS use two-space indentation; keep attribute ordering consistent (`class`, `id`, `data-*`, ARIA labels).
- Favor semantic tags (`section`, `article`, `nav`) and Bootstrap utility classes already present in `index.html`.
- Name new files and anchors in lowercase kebab-case (e.g., `apps/new-app/new-app.html`); keep image alt text descriptive and sentence-case.
- Run changes through the build script instead of duplicating headers manually—this preserves consistent navigation across apps.

## Testing Guidelines
- After running `python3 build.py`, review a sample of updated pages in the browser, especially any app/legal pair you touched, to confirm header/footer rendering and link targets.
- Perform a click-through of primary navigation plus any new CTAs; broken or missing links are the most common regression.
- For content-only updates, validate spelling, brand names, and dates against the latest product requirements; document any open questions alongside your PR.

## Commit & Pull Request Guidelines
- Follow the existing history: short, imperative, lowercase subjects (`add clipit policy`, `update heardwell hero`).
- Squash incidental whitespace-only diffs before committing; each commit should map to one logical change (content, styling, or script).
- Pull requests should describe the user-facing impact, list any manual verification steps (build + browser check), and attach screenshots for visual tweaks or new sections.

## Content & Asset Workflow
- Store new screenshots or icons in `assets/images/`; update file references with relative paths to avoid GitHub Pages caching issues.
- When deprecating an app, archive its HTML under the appropriate subfolders instead of deleting immediately, and flag the change in the PR description for review.
