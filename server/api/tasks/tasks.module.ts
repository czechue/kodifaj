import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TasksController } from "./tasks.controller";
import { TaskSchema } from "./schemas/task.schema";
import { TasksService } from "./tasks.service";
import { SolutionsService } from "../solutions/solutions.service";
import { SolutionSchema } from "../solutions/schemas/solutions.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Task", schema: TaskSchema },
      { name: "Solution", schema: SolutionSchema }
    ])
  ],
  controllers: [TasksController],
  providers: [TasksService, SolutionsService]
})
export class TasksModule {}
