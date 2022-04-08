/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    SERVER : "http://localhost:3001/"
  }
 // https://news-stand-server.herokuapp.com/
}

module.exports = nextConfig
