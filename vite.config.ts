import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const siteBasePath = '/Portfolio/'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : siteBasePath,
  plugins: [react()],
}))
