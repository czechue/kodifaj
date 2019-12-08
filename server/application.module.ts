import { Module } from "@nestjs/common";
import { RenderModule } from "nest-next";
import { MongooseModule } from "@nestjs/mongoose";

import keys from "./config/keys";

import { TasksModule } from "./api/tasks/tasks.module";
import { UsersModule } from "./api/users/users.module";
import { SolutionsModule } from "./api/solutions/solutions.module";

import { HomeRenderController } from "./routes/home-render.controller";
import { TasksRenderController } from "./routes/tasks-render.controller";
import { UsersRenderController } from "./routes/users-render.controller";

@Module({
  imports: [
    RenderModule,
    MongooseModule.forRoot(keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }),
    UsersModule,
    SolutionsModule,
    TasksModule
  ],
  controllers: [
    HomeRenderController,
    TasksRenderController,
    UsersRenderController,
  ]
})
export class AppModule {}
