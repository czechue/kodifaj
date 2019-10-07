import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  id: string;
  googleId: string;
}

const userSchema: Schema = new Schema({
  googleId: String
});

mongoose.model<IUser>("users", userSchema);
