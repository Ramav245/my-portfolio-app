/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/my-portfolio-app",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
