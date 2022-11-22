import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  clearScreen: false,
  plugins: [svelte()],
  build: {
    target: 'es2015'
  },
  server: {
    port: 3000
  }
});
