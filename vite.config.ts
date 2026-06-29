import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Required for GitHub Pages project sites: username.github.io/Portfolio/
  base: '/Portfolio/',
  plugins: [react()],
})
