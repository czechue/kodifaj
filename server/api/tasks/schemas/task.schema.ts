import * as mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
	content: String,
	createdAt: { type: Date, default: Date.now },
	images: [String],
	tips: [String],
	tags: [String],
	title: String,
	_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
