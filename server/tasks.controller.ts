import {Controller, Get, Param, Render} from "@nestjs/common";

@Controller('tasks')
export class TasksController {
	@Render("tasks")
	@Get()
	public tasks() {}

	@Render("tasks/[id]")
	@Get(":id")
	public task(@Param() id: string) {
		console.log(id)
		return { id };
	}

	// @Render("users/[id]")
	// @Get(":id")
	// public user(@Query('id') id: string) {
	//   console.log('query', id);
	//   return { id };
	// }
}
