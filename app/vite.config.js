import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip', // ou 'brotliCompress'
      ext: '.gz', // extensão do arquivo comprimido
    }),
  ],
  base: "/fullstack-projeto2"
})

