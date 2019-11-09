import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  content: string;
  images: string;
  tips: string;
  title: string;
}

const taskSchema: Schema = new Schema({
  content: String,
  images: String,
  tips: String,
  title: String
});

mongoose.model<ITask>("tasks", taskSchema);
