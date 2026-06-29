import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub project site: username.github.io/Portfolio/
  base: command === 'serve' ? '/' : '/Portfolio/',
  plugins: [react()],
}))
