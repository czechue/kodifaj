import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task.interface';
import { RequestWithUser } from '../common/interfaces/requestWithUser.interface';
import { CreateTaskBodyDto } from './dto/create-task-body.dto';

@Controller('api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('')
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Task | null> {
    return this.tasksService.findOne(id);
  }

  @Post('')
  create(
    @Body() createTaskBodyDto: CreateTaskBodyDto,
    @Req() req: RequestWithUser,
  ) {
    const authorId = req?.user?._id;

    if (authorId) {
      const createTaskDto = {
        ...createTaskBodyDto,
        reviewCount: 1,
        _user: authorId,
      };

      this.tasksService.create(createTaskDto);
    }
  }
}
