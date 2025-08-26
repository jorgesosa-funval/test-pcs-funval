import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        pc1: './pc1.html',
        pc2: './pc2.html',
      }
    }
  }
})