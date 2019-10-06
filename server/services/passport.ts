import passport from "passport";
import { Profile, VerifyCallback } from "passport-google-oauth20";
const GoogleStrategy = require("passport-google-oauth20").Strategy;
import keys from "../../config/keys";

export default function passportService() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
      },
      (
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: VerifyCallback
      ): void => {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        done();
      }
    )
  );
}
