import {Controller, Get, Param, Render} from "@nestjs/common";

@Controller('tasks')
export class TasksController {
	@Render("tasks")
	@Get()
	public tasks() {}

	@Render("tasks/[id]")
	@Get(":id")
	public task(@Param("id") id: string) {
		return { id };
	}

	// @Render("users/[id]")
	// @Get(":id")
	// public user(@Query('id') id: string) {
	//   console.log('query', id);
	//   return { id };
	// }
}
