/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bit.ly",
        pathname: "/react-cover",
      },
    ],
  },
};

module.exports = nextConfig;
