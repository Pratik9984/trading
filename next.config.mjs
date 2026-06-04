import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configured root path if turbopack is run in development
  experimental: {
    // any experimental options if needed
  }
}

export default nextConfig
