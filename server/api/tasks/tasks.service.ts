import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './interfaces/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async findAll(): Promise<Task[]> {
    return await this.taskModel
      .find()
      .populate('_user', 'login')
      .exec();
  }

  async findOne(id: string): Promise<Task | null> {
    return await this.taskModel
      .findById(id)
      .populate('_user')
      .populate({ path: '_solutions', model: 'Solution', populate: '_user' });
  }

  async create(task: CreateTaskDto): Promise<Task | void> {
    const createdTask = new this.taskModel(task);
    try {
      await createdTask.save();
      return createdTask;
    } catch (e) {
      console.log('error');
    }
  }
}
