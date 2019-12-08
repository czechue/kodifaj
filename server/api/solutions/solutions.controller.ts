import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { SolutionsService } from "./solutions.service";
import { Solution } from "./interfaces/solutions.interface";
import { CreateSolutionBodyDto } from "./dto/create-solution.dto";

@Controller("api/solutions")
export class SolutionsController {
  constructor(private readonly solutionsService: SolutionsService) {}

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Solution | null> {
    return this.solutionsService.findOne(id);
  }

  @Post("")
  create(@Body() createSolutionBodyDto: CreateSolutionBodyDto) {
    // todo: fix after add authorization
    const authorId = "5db76f4f5ee5304d81f66df1";
    const createSolutionDto = {
      ...createSolutionBodyDto,
      _task: createSolutionBodyDto.taskId,
      _user: authorId,
    };
    this.solutionsService.create(createSolutionDto);
  }
}
