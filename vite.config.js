import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows access from network/public URLs
    allowedHosts: [
      '.ngrok-free.app' // 👈 put your ngrok domain here
    ]
  }
})