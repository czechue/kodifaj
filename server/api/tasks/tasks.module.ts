import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TasksController } from "./tasks.controller";
import { TaskSchema } from "./tasks.schema";
import {TasksService} from "./tasks.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Task", schema: TaskSchema }])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
