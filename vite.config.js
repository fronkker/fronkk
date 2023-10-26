import { defineConfig } from 'vite'
import {fileURLToPath, URL} from 'node:url'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/img', import.meta.url)),
      '@css': fileURLToPath(new URL('./src/assets/css', import.meta.url)),
    }
  },
  build:{
    emptyOutDir:false,
    lib:{
      entry:path.resolve(__dirname,'src/main.js'),
      name:'fronkk',
      fileName: 'my-lib'
    },
    rollupOptions:{
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    }
  },
  plugins: [vue()],
})
