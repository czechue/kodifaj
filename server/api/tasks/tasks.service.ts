import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Document, Model } from "mongoose";
import * as mongoose from "mongoose";

@Injectable()
export class TasksService {
  constructor(@InjectModel("Task") private readonly taskModel: Model<Task>) {}

  async findAll(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }
}

export interface Task extends Document {
  content: string;
  createdAt: string;
  images: string[];
  tips: string[];
  tags: string[];
  title: string;
  _user: { type: mongoose.Schema.Types.ObjectId; ref: "users" };
}
