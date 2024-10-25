import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

import {dependencies, devDependencies} from './package.json'

export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: './tsconfig.app.json'  })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'car-robots-library',
      fileName: (format) => `car-robots-library.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react/jsx-runtime',...Object.keys(dependencies), ...Object.keys(devDependencies)],
      output: {
        dir: 'dist',
        entryFileNames: '[name].js',
        format: 'es',
      },
    },
    sourcemap: true,
    target: 'esnext',
  },
})
