import type { NextConfig } from "next";
import path from "path";

const root = path.join(__dirname);

const nextConfig: NextConfig = {
  // Multiple lockfiles made Next treat C:\Users\DELL as the workspace root,
  // which slowed every compile and route change.
  outputFileTracingRoot: root,
  turbopack: { root },
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
