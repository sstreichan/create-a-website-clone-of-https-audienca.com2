import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages requires static export
  output: "export",
  // Configure for GitHub Pages
  trailingSlash: true,
  // Ensure images work properly in export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
