import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  id: string;
  login: string;
  googleId?: string;
  githubId?: string;
}

const userSchema: Schema = new Schema({
  googleId: String,
  githubId: String,
  login: String,
});

mongoose.model<IUser>("users", userSchema);
