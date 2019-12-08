import { Module } from "@nestjs/common";
import { RenderModule } from "nest-next";
import { MongooseModule } from "@nestjs/mongoose";

import keys from "./config/keys";

import { TasksModule } from "./api/tasks/tasks.module";
import { UsersModule } from "./api/users/users.module";
import { SolutionsModule } from "./api/solutions/solutions.module";

import { AppController } from "./app.controller";
import { TasksController } from "./tasks.controller";
import { UsersController } from "./users.controller";

@Module({
  imports: [
    RenderModule,
    MongooseModule.forRoot(keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    UsersModule,
    SolutionsModule,
    TasksModule
  ],
  controllers: [
    AppController,
    TasksController,
    UsersController,
  ]
})
export class AppModule {}
