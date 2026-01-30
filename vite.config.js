import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',   // GitHub repo name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})



// // https://vite.dev/config/
// export default defineConfig(({ mode }) => ({
//   plugins: [react()],
//   base: mode === 'github' ? '/Portfolio/' : '/',
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// }))
