import { Controller, Get, Param, Render } from "@nestjs/common";

@Controller("users")
export class UsersController {
  @Render("users")
  @Get()
  public users() {}

  @Render("users/[id]")
  @Get(":id")
  public user(@Param("id") id: string) {
    return { id };
  }
}
