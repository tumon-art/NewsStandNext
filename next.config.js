/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    SERVER : "https://evening-stream-93162.herokuapp.com/"
  }
 // https://evening-stream-93162.herokuapp.com/
 // http://localhost:3001/
}

module.exports = nextConfig
