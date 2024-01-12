import { defineConfig } from 'vite'
import {resolve} from "path";
import react from '@vitejs/plugin-react-swc'

const root = resolve(__dirname,"src")

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps:{
    include:['@svgr/webpack']
  },
  plugins: [react()],
  resolve: {
    alias:{
      "components": resolve(root, "components"),
      "constants": resolve(root, "constants"),
      "assets": resolve(root, "assets"),
      "types": resolve(root, "types"),
      "utils": resolve(root, "utils"),
    }
  },
})
