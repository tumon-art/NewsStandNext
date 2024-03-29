/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  experimental: { images: { allowFutureImage: true } },
  // env: {
  //   SERVER: "https://newsstand.fly.dev/",
  // },

  // https://news-stand-server.herokuapp.com/
  // https://evening-stream-93162.herokuapp.com/
  // http://localhost:3001/
  // https://newsstand.fly.dev/
  // nothing
};

module.exports = nextConfig;
