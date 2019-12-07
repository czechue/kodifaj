import {Controller, Get, Render} from "@nestjs/common";

@Controller()
export class AppController {
  @Render("index")
  @Get()
  public index() {}

  // @Render("tasks")
  // @Get("tasks")
  // public tasks() {}
  //
  // @Render("tasks/[id]")
  // @Get("tasks/:id")
  // public task(@Param() id: string) {
  //   return { id };
  // }

  // @Render("users/[id]")
  // @Get(":id")
  // public user(@Query('id') id: string) {
  //   console.log('query', id);
  //   return { id };
  // }
}
