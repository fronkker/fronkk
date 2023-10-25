import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
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
