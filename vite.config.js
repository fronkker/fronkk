import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  build:{
    emptyOutDir:false,
    lib:{
      entry:path.resolve(__dirname,'src/main.js'),
      name:'fronkk',
      fileName:(format)=>`${format}.js`
    },
    rollupOptions:{
      output:{
        exports: "auto"
      }
    }
  },
  plugins: [vue()],
})
