# Talks

A collection of [Slidev](https://sli.dev) presentations, built together and published to
GitHub Pages with a generated index page.

## Structure

```
.
├── ji_2026/                # one folder per presentation
│   ├── slides.md           # deck content and metadata
│   └── public/             # images and other static assets
├── scripts/
│   ├── build.mjs           # builds every deck + generates dist/index.html
│   ├── dev.mjs             # starts Slidev for one deck
│   ├── new.mjs             # scaffolds a new deck
│   ├── serve.mjs           # serves dist/ locally under the Pages base path
│   ├── index-template.mjs  # HTML template for the index page
│   └── lib.mjs             # shared discovery/base-path helpers
└── .github/workflows/deploy.yml
```

Any top-level folder containing a `slides.md` is automatically treated as a presentation.
`dist/`, `node_modules/`, `scripts/` and dot-directories are ignored.

## Requirements

- Node.js 22.12+
- pnpm 11

## Local usage

Install dependencies:

```bash
pnpm install
```

Start one presentation with live reload:

```bash
pnpm dev ji_2026
```

Build all presentations and generate the index:

```bash
pnpm build
```

Preview the complete result exactly as it will be published:

```bash
pnpm preview
# http://localhost:4173/talks/
```

Create a new presentation:

```bash
pnpm new my_talk "My Talk Title"
pnpm dev my_talk
```

## Presentation metadata

The index page reads these frontmatter keys from each `slides.md`:

```yaml
---
title: JI 2026
description: Journées Informatiques 2026
author: Tom François
date: 2026-01-15
order: 0
theme: default
---
```

Only `title` is required for a nice label; without it the folder name is humanized.
`order` controls the index order (lower first), then presentations are sorted by `date`
(newest first) and finally by folder name.

## Deployment

The workflow in `.github/workflows/deploy.yml` runs on every push to `main` and on manual
dispatch. It builds all presentations and deploys `dist/` to GitHub Pages.

One-time setup:

1. Create the GitHub repository and push this project to `main`.
2. In the repository settings, open **Pages** and set **Source** to **GitHub Actions**.
3. Push again (or run the workflow manually).

The base URL is derived automatically from the repository name:

- `github.com/<user>/talks` → `https://<user>.github.io/talks/`
- `github.com/<user>/<user>.github.io` → `https://<user>.github.io/`

To override it locally or in CI, set `BASE_PATH`:

```bash
BASE_PATH=/custom/path/ pnpm build
```

Each deck is built with `--router-mode hash`, so deep links and refreshes work on GitHub
Pages without extra rewrite rules. The generated `dist/index.html` links to every deck and
is regenerated on each build, so there is no index to maintain by hand.

## Migrating existing presentations

Copy an existing presentation folder into this repository as long as it contains a
`slides.md` file. Keep its relative assets next to it or in its `public/` folder, then run:

```bash
pnpm dev <folder-name>
pnpm build
```

## Optional: export a deck to PDF

The build does not require a browser. For PDF export, add Playwright:

```bash
pnpm add -D playwright-chromium
pnpm exec slidev export ji_2026/slides.md
```
