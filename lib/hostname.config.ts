export const HOSTNAME =
  process.env.NODE_ENV === "production"
    ? "https://tranquil-crag-25841.herokuapp.com"
    : "http://localhost:3000";
