import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Pin the workspace root — a stray lockfile in the parent tree otherwise
  // confuses Turbopack's root inference.
  turbopack: { root: here },
};

export default nextConfig;
