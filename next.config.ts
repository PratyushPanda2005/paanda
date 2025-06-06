/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... your existing config
  experimental: {
    allowedDevOrigins: ["192.168.1.10", "localhost"] // Add your IP and any other origins
  }
}

module.exports = nextConfig