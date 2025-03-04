/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["example.com"], // Thay "example.com" bằng domain ảnh API của bạn
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
