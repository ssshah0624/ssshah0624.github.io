# Brightwood website redesign review

The homepage and Server Tip Tracker direction were approved before extending the design to all 18 current apps. CoffeeBook inspired clear hierarchy, workflow explanation and restrained spacing; no CoffeeBook assets or copy are used.

## Content evidence

`app-store-evidence.json` records the official Apple metadata retrieved on 2026-10-26. All 18 listings identify Brightwood Apps LLC. Product imagery is from those official listings. Website copy avoids unverified testimonials, ratings, medical outcomes and fixed prices. Language lesson/unit totals conflict between current descriptions and screenshots, so those totals are omitted. Paid downloads and in-app purchases are qualified; the store remains authoritative for regional price and availability.

Heardwell and Call GPT are absent from the catalogue, navigation and product routes. Their old URLs show an unavailable message through the 404 fallback; no redirect is introduced. Their legal documents and app repositories are retained. Existing legal main content is unchanged; only website navigation and shared presentation are adjusted.

## Validation before PR

- TypeScript and Vite production build pass; automated check validates all 18 app IDs/publishers, device requirements, 54 real image files, generated direct/legacy routes and legal destinations.
- All 18 app pages inspected in Chrome at desktop 1446px and mobile 390px. No horizontal overflow; one main/heading per page. Homepage additionally inspected at 320px; support and representative legal pages inspected on mobile.
- 57 local HTTP routes (homepage, support, terms, all app and legacy routes and privacy destinations) return 200.
- Keyboard skip link moves focus to main, app navigation restores top/focus, FAQ opens with Enter, category filtering returns nine language apps, removed routes show unavailable, unknown child route shows 404 content.
- No console errors observed in the app checks. Visible focus and reduced-motion CSS supplied; no screen-reader device or simulated reduced-motion preference test performed.
- No lint script exists. Lockfile/dependency versions are unchanged. The repository's existing npm audit findings are outside this design change.

## Deployment verification

The Pages build emits `release.json` containing its exact GITHUB_SHA and active route inventory. Verify it against the merged commit, then recheck public HTTP responses and rendered pages. Successful local preview alone is not proof of deployment.
