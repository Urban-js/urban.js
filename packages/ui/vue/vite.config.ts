import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dtsPlugin from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dtsPlugin()],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'vue-ui',
      fileName: (format) => `vue-ui.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue']
    }
  },
})
