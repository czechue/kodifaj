import { Express} from "express";
import passport from "passport";
import Server from "next/dist/next-server/server/next-server";

export default function authRoutes(_app: Server, server: Express) {
  server.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // this url is with the code queryParam
  server.get("/auth/google/callback", passport.authenticate("google"));
}
