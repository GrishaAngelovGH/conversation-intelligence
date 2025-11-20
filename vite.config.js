import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['@babel/plugin-transform-private-methods']
      }
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      components: '/src/components',
      hooks: '/src/hooks',
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js'
  }
})
