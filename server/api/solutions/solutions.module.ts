import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SolutionsController } from "./solutions.controller";
import { SolutionsService } from "./solutions.service";
import { SolutionSchema } from "./schemas/solutions.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Solution", schema: SolutionSchema }])
  ],
  controllers: [SolutionsController],
  providers: [SolutionsService],
  exports: [SolutionsService]
})
export class SolutionsModule {}
