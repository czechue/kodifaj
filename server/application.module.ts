import { Module } from "@nestjs/common";
import { RenderModule } from "nest-next";
import { AppController } from "./app.controller";
import { MongooseModule } from "@nestjs/mongoose";
import keys from "./config/keys";
import { TasksModule } from "./api/tasks/tasks.module";

@Module({
  imports: [
    RenderModule,
    MongooseModule.forRoot(keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    TasksModule
  ],
  controllers: [AppController]
})
export class AppModule {}
