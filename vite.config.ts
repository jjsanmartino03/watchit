import path from 'path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    css: {
        modules: {
            localsConvention: 'camelCase'
        }
    }, // configure path alias
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "/src/"),
            "@ui": path.resolve(__dirname, "/src/ui/"),
            "@redux": path.resolve(__dirname, "/src/redux/"),
            "@services": path.resolve(__dirname, "/src/services/"),
            "@utils": path.resolve(__dirname, "/src/utils/"),
        }
    }
})
