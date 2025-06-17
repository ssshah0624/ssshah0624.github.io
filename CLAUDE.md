# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Brightwood Apps, an iOS app development company. The site is hosted on GitHub Pages and uses a custom domain (www.brightwoodapps.com).

## Build Commands

To build the site after making changes to header.html or footer.html:
```bash
python3 build.py
```

This script inlines the header and footer content into all HTML files to avoid cross-origin fetch issues on GitHub Pages.

## Architecture

The site uses a component-based approach:
- **header.html** - Navigation bar component (maintained separately)
- **footer.html** - Footer component (maintained separately)
- **build.py** - Python script that inlines header/footer into all HTML pages

Each app has three pages:
- Main app page (e.g., `clipit.html`)
- Privacy policy page (e.g., `clipit-privacy.html`)
- Terms of service page (e.g., `clipit-terms.html`)

## Development Workflow

1. When modifying the navigation or footer, edit `header.html` or `footer.html`
2. Run `python3 build.py` to inline the changes into all pages
3. Review changes with `git diff`
4. Commit and push to deploy via GitHub Pages

## Local Development

To run the site locally, use Python's built-in HTTP server:
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser.

## Important Notes

- The site uses Bootstrap 4.5.2 for responsive design
- All images should be added to the root directory
- The `venv/` directory is excluded from Git and GitHub Pages
- CNAME file configures the custom domain
- _config.yml configures GitHub Pages settings