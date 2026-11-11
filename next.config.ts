import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // অনলাইন (https) ছবির লিংক ব্যবহার করতে চাইলে এটা দরকার
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
