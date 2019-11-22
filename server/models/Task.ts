import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  content: string;
  createdAt: string;
  images: string;
  tips: string;
  title: string;
  _user: string;
}

const taskSchema: Schema = new Schema({
  content: String,
  createdAt: { type: Date, default: Date.now },
  images: String,
  tips: [String],
  title: String,
  _user: { type: Schema.Types.ObjectId, ref: 'users' }
});

mongoose.model<ITask>("tasks", taskSchema);
