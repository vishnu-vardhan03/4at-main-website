/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep high-churn development output in the dependency cache. OneDrive
  // leaves this tree local, preventing Files On-Demand readlink failures.
  distDir: process.env.NODE_ENV === "development" ? "node_modules/.cache/4at-next-dev" : ".next",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Serve modern formats; next/image negotiates per-request.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "api.dicebear.com" },
      // Required for Sanity-hosted images (urlFor in SlidingTestimonial).
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  experimental: {
    // Tree-shake barrel imports from these large packages.
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};
export default nextConfig;
