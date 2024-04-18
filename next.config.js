/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    GOOGLE_CLIENT_ID:
      "841687997503-q7abjh20pl56jokm8hghfufk1807vohi.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
    NEXTAUTH_SECRET: "orwm6drGfz1zl+1BRU6e//ztkyDqh+4ptd3x7s6KWyk=",
    NEXTAUTH_URL:
      process.env.NODE_ENV == "development"
        ? "http://localhost:3000"
        : "https://momfittraining.com",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "momfit-dev.s3.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
