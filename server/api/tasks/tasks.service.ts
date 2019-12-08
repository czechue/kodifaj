import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Task } from "./interfaces/task.interface";

@Injectable()
export class TasksService {
  constructor(@InjectModel("Task") private readonly taskModel: Model<Task>) {}

  async findAll(): Promise<Task[]> {
    return await this.taskModel
      .find()
      .populate("_user", "login")
      .exec();
  }

  async findOne(id: string): Promise<Task | null> {
    const task = await this.taskModel.findOne({ _id: id });
    // const solution =
    return task;
  }
}
