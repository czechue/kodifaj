import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findOne(filter: FindOne): Promise<User | null> {
    return await this.userModel.findOne(filter);
  }

  async findOneWithDetails(filter: FindOne): Promise<User | null> {
    return await this.userModel
      .findOne(filter)
      .populate('_tasks')
      .populate('_solutions');
  }

  async create(profile: any): Promise<User> {
    const newUser = await new this.userModel({
      githubId: profile.id,
      login: profile.displayName,
      photo: profile.photos ? profile.photos[0].value : '',
    });
    return newUser.save();
  }
}

interface FindOne {
  [key: string]: string;
}
