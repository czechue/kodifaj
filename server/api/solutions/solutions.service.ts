import { Injectable } from "@nestjs/common";

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Solution } from "./interfaces/solutions.interface";

@Injectable()
export class SolutionsService {
  constructor(
    @InjectModel("Solution") private readonly solutionModel: Model<Solution>
  ) {}

  async findOne(id: string): Promise<Solution | null> {
    return await this.solutionModel.findOne({ _id: id });
  }
}
