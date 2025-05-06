// @ts-check
import icon from 'astro-icon'
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import { iconTyping } from './scripts/integrations.ts'

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), react(), iconTyping()],
  vite: {
    plugins: [tailwindcss()],
  },
});