export const HOSTNAME =
  process.env.NODE_ENV === "production"
    ? "https://kodifaj.pl"
    : "http://localhost:3000";
