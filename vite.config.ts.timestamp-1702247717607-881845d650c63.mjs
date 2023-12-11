// vite.config.ts
import { defineConfig } from "file:///home/julian/projects/watchit/node_modules/vite/dist/node/index.js";
import react from "file:///home/julian/projects/watchit/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    port: 3e3
  },
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  },
  // configure path alias
  resolve: {
    alias: {
      "@": "/src",
      "@ui": "/src/ui",
      "@redux": "/src/redux",
      "@services": "/src/services",
      "@utils": "/src/utils"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9qdWxpYW4vcHJvamVjdHMvd2F0Y2hpdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvanVsaWFuL3Byb2plY3RzL3dhdGNoaXQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvanVsaWFuL3Byb2plY3RzL3dhdGNoaXQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW3JlYWN0KCldLFxuICAgIHNlcnZlcjoge1xuICAgICAgICBwb3J0OiAzMDAwLFxuICAgIH0sXG4gICAgY3NzOiB7XG4gICAgICAgIG1vZHVsZXM6IHtcbiAgICAgICAgICAgIGxvY2Fsc0NvbnZlbnRpb246ICdjYW1lbENhc2UnXG4gICAgICAgIH1cbiAgICB9LCAvLyBjb25maWd1cmUgcGF0aCBhbGlhc1xuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgIFwiQFwiOiBcIi9zcmNcIixcbiAgICAgICAgICAgIFwiQHVpXCI6IFwiL3NyYy91aVwiLFxuICAgICAgICAgICAgXCJAcmVkdXhcIjogXCIvc3JjL3JlZHV4XCIsXG4gICAgICAgICAgICBcIkBzZXJ2aWNlc1wiOiBcIi9zcmMvc2VydmljZXNcIixcbiAgICAgICAgICAgIFwiQHV0aWxzXCI6IFwiL3NyYy91dGlsc1wiLFxuICAgICAgICB9XG4gICAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVEsU0FBUSxvQkFBbUI7QUFDcFMsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixRQUFRO0FBQUEsSUFDSixNQUFNO0FBQUEsRUFDVjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0QsU0FBUztBQUFBLE1BQ0wsa0JBQWtCO0FBQUEsSUFDdEI7QUFBQSxFQUNKO0FBQUE7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxJQUNkO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
