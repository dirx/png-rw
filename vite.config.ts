import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'png-rw',
      fileName: 'png-rw'
    }
  },
  plugins: [dts({
    rollupTypes: true,
    exclude: ['**/*.test.ts']
  })],
  test: {
    coverage: {
      provider: 'v8'
    }
  }
})
