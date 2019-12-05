import {Controller, Get} from "@nestjs/common";
import {Task, TasksService} from "./tasks.service";

@Controller('api/tasks')
export class TasksController {
	constructor(private readonly tasksService: TasksService) {}

	@Get()
	findAll(): Promise<Task[]> {
		return this.tasksService.findAll();
	}
}
