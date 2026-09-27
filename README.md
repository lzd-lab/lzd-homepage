# Zedong Li — Academic Homepage

A static academic homepage built with Astro, TypeScript, and Tailwind CSS. It is configured for deployment to GitHub Pages at `https://lzd-lab.github.io/lzd-homepage/`.

## Local development

Requirements: Node.js 22 or later.

```bash
npm install
npm run dev
```

Open `http://localhost:4321`. To test a production build:

```bash
npm run build
npm run preview
```

## Edit content

All frequently edited content lives in `src/data/`:

- `site.ts` — identity, biography, affiliation, research interests, education, employment, and social links
- `publications.ts` — publications, links, and BibTeX
- `projects.ts` — projects, tags, and links
- `news.ts` — dated news items
- `teaching.ts` — teaching, talks, and awards

The included publications, projects, news, education, teaching, talks, and awards are explicitly marked placeholders. Replace or remove them before publishing. Social links containing `[URL]` render as disabled labels.

### Replace the portrait

Add a portrait to `public/portrait.jpg`, then replace the `.portrait` placeholder in `src/pages/index.astro` with:

```astro
<img class="portrait" src={`${import.meta.env.BASE_URL}portrait.jpg`} alt="Portrait of Zedong Li" />
```

### Add a CV

Place the PDF at `public/cv.pdf`, set `cvPath` in `src/data/site.ts`, and add a CV link in the hero or navigation.

## GitHub Pages deployment

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main`, or run **Deploy to GitHub Pages** manually from the Actions tab.

The workflow detects the repository name and builds with the correct `/lzd-homepage` base path. If the repository is renamed to an account site such as `username.github.io`, the base path is omitted automatically.

## Project commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run check` | Run Astro and TypeScript checks |
| `npm run build` | Check and build the static site |
| `npm run preview` | Preview the production build |
