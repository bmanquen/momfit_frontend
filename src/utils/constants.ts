export const momfitBackend =
  process.env.NODE_ENV === "production"
    ? "https://momfit-backend.fly.dev"
    : "http://localhost:5433";

export const localApi =
  process.env.NODE_ENV === "production"
    ? "https://momfittraining.com"
    : "http://localhost:3000";
