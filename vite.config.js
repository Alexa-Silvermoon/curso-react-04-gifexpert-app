import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})


// por si se quiere subir tambien a github pages:

/* 
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: './docs'
  }
})
*/

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19762390#questions/17691714

// y 

// https://www.udemy.com/course/react-cero-experto/learn/lecture/32018146#questions/17691714