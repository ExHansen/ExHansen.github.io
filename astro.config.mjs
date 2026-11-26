// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypePrettyCode from 'rehype-pretty-code';
import { remarkCodeMeta } from './src/lib/remark-code-meta.ts';
import { CONFIG } from './src/data/config.ts';

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: {
    light: 'github-light',
    dark: 'github-dark',
  },
  keepBackground: false,
};

// https://astro.build/config
export default defineConfig({
  site: CONFIG.site.url,
  // Plain static site: deploys as-is to Cloudflare Pages, Netlify, Vercel or GitHub Pages.
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    // MDX inherits the markdown processor below (Astro 7).
    mdx({ syntaxHighlight: false }),
    sitemap(),
  ],

  markdown: {
    syntaxHighlight: false,
    // remark/rehype pipeline for blog posts; GitHub-flavored Markdown is on by default.
    processor: unified({
      remarkPlugins: [remarkCodeMeta],
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    }),
  },
});
