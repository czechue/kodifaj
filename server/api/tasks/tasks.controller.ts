import { Controller, Get, Param } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Task } from "./interfaces/task.interface";

@Controller("api/tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Task | null> {
    return this.tasksService.findOne(id);
  }
}
