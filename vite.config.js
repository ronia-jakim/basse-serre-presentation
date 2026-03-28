import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

export default defineConfig({
  base: '/basse-serre-presentation/',

  build: {
    chunkSizeWarningLimit: 1000, // Boost from 500kb to 1000kb
  },

  plugins: [
    { enforce: 'pre', 
      ...mdx( {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      } ) }, 
    react()
  ],
})
