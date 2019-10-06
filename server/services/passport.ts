import passport from "passport";
import { Profile, VerifyCallback } from "passport-google-oauth20";
const GoogleStrategy = require("passport-google-oauth20").Strategy;
import keys from "../config/keys";
import * as mongoose from "mongoose";
import { IUser } from "../models/User";

const User = mongoose.model("users");

export default function passportService() {
  passport.serializeUser((user: IUser, done) => {
    done(undefined, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(undefined, user);
    });
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
      },
      async (
        _accessToken: string,
        _refreshToken: string,
        profile: Profile,
        done: VerifyCallback
      ): Promise<void> => {
        const existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser) {
          return done(undefined, existingUser);
        }

        try {
          const user = await new User({ googleId: profile.id }).save();
          done(undefined, user);
        } catch (e) {
          done("failing add new user");
        }
      }
    )
  );
}
