import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './tasks.controller';
import { TaskSchema } from './schemas/task.schema';
import { TasksService } from './tasks.service';
import { UsersService } from '../users/users.service';
import { UserSchema } from '../users/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Task', schema: TaskSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [TasksController],
  providers: [TasksService, UsersService],
})
export class TasksModule {}
