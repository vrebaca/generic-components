import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/packages/colors/colors.css',
          dest: './' // Copies to dist/colors.css
        },
        {
          src: 'src/packages/fonts/fontfamilies.css',
          dest: './' // Copies to dist/fontfamilies.css
        },
        {
          src: 'src/packages/fonts/fontsizes.css',
          dest: './' // Copies to dist/fontsizes.css
        },
        {
          src: 'src/packages/fonts/fontweights.css',
          dest: './' // Copies to dist/fontweights.css
        },
        {
          src: 'src/packages/fonts/lineheights.css',
          dest: './' // Copies to dist/lineheights.css
        },
        // Added targets for custom-portal CSS files
        {
          src: 'src/packages/custom-portal/bootstrap.min.css',
          dest: './' // Copies to dist/bootstrap.min.css
        },
        {
          src: 'src/packages/custom-portal/custom-icons.css',
          dest: './' // Copies to dist/custom-icons.css
        },
        {
          src: 'src/packages/custom-portal/font-awesome.min.css',
          dest: './' // Copies to dist/font-awesome.min.css
        },
        {
          src: 'src/packages/custom-portal/style_color.css',
          dest: './' // Copies to dist/style_color.css
        },
        {
          src: 'src/packages/custom-portal/style_extend.css',
          dest: './' // Copies to dist/style_extend.css
        },
        {
          src: 'src/packages/custom-portal/style_map.css',
          dest: './' // Copies to dist/style_map.css
        },
        {
          src: 'src/packages/custom-portal/style.css',
          dest: './' // Copies to dist/style.css
        },
        {
          src: 'src/packages/modal/PopOverModal.css',
          dest: './' // Copies to dist/PopOverModal.css
        }
      ]
    })
  ],
  base: './', // Adjusted for library build
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/packages/index.ts'), // Create this entry file
      name: 'genericComponents',
      fileName: (format) => `generic-components.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-code-blocks'], // Added 'react-code-blocks'
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-code-blocks': 'ReactCodeBlocks' // Added 'react-code-blocks'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true,
    copyPublicDir: false // Do not copy public folder for library build
  }
});
