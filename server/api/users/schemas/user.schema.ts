import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
	googleId: String,
	githubId: String,
	login: String,
	photo: String,
});
