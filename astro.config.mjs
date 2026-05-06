// astro.config.mjs
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  // この integrations プロパティに対して型アサーションを行う
  integrations: [
    icon(),
  ],
});