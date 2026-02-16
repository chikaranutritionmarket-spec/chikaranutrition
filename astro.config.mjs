import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',

  // Update this if you have the actual domain
  site: 'https://chikaranutrition.es',

  integrations: [
    react(),
    sitemap({
      serialize(item) {
        // Automatically determine if it's a blog post or a main page
        // using relative path logic (item.url is the absolute URL)
        const path = new URL(item.url).pathname;

        // Blog posts
        if (path.includes('/blog/') && path !== '/blog/') {
          item.priority = 0.7;
          item.changefreq = 'monthly';
          // We can use the current time for lastmod as a dynamic fallback
          // if we don't want a manual manifest, ensuring it's "fresh" for robots
          item.lastmod = new Date().toISOString();
        }

        // Main structural pages
        const isMainPage = path === '/' || path === '/arsenal/' || path === '/sobre-nosotros/';
        if (isMainPage) {
          item.priority = 1.0;
          item.changefreq = 'weekly';
          item.lastmod = new Date().toISOString();
        }

        return item;
      }
    })
  ],
  adapter: netlify(),
  trailingSlash: 'always',

  build: {
    format: 'directory'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});