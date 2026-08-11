import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // relative paths – works for GitHub Pages subdirectories
  server: {
    proxy: {
      '/api': 'http://localhost:8000'
    }
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'three']
        }
      }
    }
  }
})
