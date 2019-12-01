import { Keys } from "./keys";

export default {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  githubClientID: process.env.GITHUB_CLIENT_ID,
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
  // mongoURI: process.env.MONGO_URI,
  mongoURI: "mongodb+srv://czechue:fender15@kodifaj-gzt7a.mongodb.net/anything?retryWrites=true&w=majority",
  cookieKey: process.env.COOKIE_KEY
} as Keys;
