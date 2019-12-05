import { Controller, Get, Param, Render } from "@nestjs/common";

@Controller()
export class AppController {
  @Render("index")
  @Get()
  public index() {}

  @Render("tasks")
  @Get("tasks")
  public tasks() {}

  @Render("tasks/[id]")
  @Get("tasks/:id")
  public task(@Param() id?: string) {
    return { id };
  }
}
