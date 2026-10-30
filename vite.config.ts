import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // No build SSR (pré-renderização), empacota as dependências junto
  // para evitar problemas de módulos CommonJS/ESM no Node.
  ssr: { noExternal: true },
})
