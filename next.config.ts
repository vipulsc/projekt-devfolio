import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Basic optimizations
  poweredByHeader: false,
  compress: true,

  // Image Optimization
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
