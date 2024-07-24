import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // Enable source maps for CSS files
    sourceMap: true
  },
  fs: {
    allow: ['../node_modules/@fortawesome/fontawesome-free/webfonts']
  }
})
