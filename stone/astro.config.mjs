import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.stonebuysell.ir',
  trailingSlash: 'always',
  build: { format: 'directory' },
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
