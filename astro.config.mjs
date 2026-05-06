// astro.config.mjs
import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  // この integrations プロパティに対して型アサーションを行う
  integrations: [
    icon(),
  ],
  fonts: [{
    provider: fontProviders.google(),
    name: "Yomogi",
    cssVariable: "--font-yomogi",
  }]
});