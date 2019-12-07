import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./interfaces/user.interface";

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private readonly userModel: Model<User>) {}

  async findOne(id: string): Promise<User | null> {
    console.log("UsersService id", id);
    return await this.userModel.findOne({ _id: id });
  }
}
