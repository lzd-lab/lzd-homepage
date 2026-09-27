import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'lzd-homepage';
const isProjectPage = !repository.endsWith('.github.io');
const isGitHubBuild = process.env.GITHUB_ACTIONS === 'true';
const base = isGitHubBuild && isProjectPage ? `/${repository}` : '';

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL ?? 'https://lzd-lab.github.io/lzd-homepage',
  base,
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
