import {Controller, Get, Param} from "@nestjs/common";
import {SolutionsService} from "./solutions.service";
import {Solution} from "./interfaces/solutions.interface";

@Controller("api/solutions")
export class SolutionsController {
	constructor(private readonly solutionsService: SolutionsService){}

	@Get(":id")
	findOne(@Param("id") id: string): Promise<Solution | null> {
		return this.solutionsService.findOne(id)
	}
}
