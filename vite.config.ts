import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base so the static build works at any path (GitHub Pages
  // serves it under /world-quest/).
  base: './',
  server: { port: 5190 },
  preview: { port: 5190 },
})
