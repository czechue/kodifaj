import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Task, TaskWithSolutions } from "./interfaces/task.interface";
import { Solution } from "../solutions/interfaces/solutions.interface";

@Injectable()
export class TasksService {
  constructor(
    @InjectModel("Task") private readonly taskModel: Model<Task>,
    @InjectModel("Solution") private readonly solutionModel: Model<Solution>
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.taskModel
      .find()
      .populate("_user", "login")
      .exec();
  }

  async findOne(id: string): Promise<TaskWithSolutions> {
    const task = await this.taskModel.findById(id).populate("_user");
    const solutions = await this.solutionModel.find({ _task: id }).populate("_user");


    return Promise.all([task, solutions]).then(([taskRes, solutionsRes]: any) => {
      return Object.assign({}, taskRes?._doc, { _solutions: solutionsRes });
    });
  }




  // async findOne(id: string): Promise<TaskWithSolutions> {
  //   const task = await this.taskModel.findById(id).populate("_user");
  //   const solutions = await this.solutionModel.find({ _task: id }).populate("_user");
  //
  //
  //   return Promise.all([task, solutions]).then(([taskRes, solutionsRes]: any) => {
  //     return Object.assign({}, taskRes?._doc, { solutions: solutionsRes });
  //   });
  // }
}
