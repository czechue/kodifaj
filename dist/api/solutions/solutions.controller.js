"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const solutions_service_1 = require("./solutions.service");
const create_solution_dto_1 = require("./dto/create-solution.dto");
let SolutionsController = class SolutionsController {
    constructor(solutionsService) {
        this.solutionsService = solutionsService;
    }
    findOne(id) {
        return this.solutionsService.findOne(id);
    }
    create(createSolutionBodyDto, req) {
        var _a, _b;
        // todo: use middleware or smth to allow this endpoint only to specific users
        const authorId = (_b = (_a = req) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b._id;
        if (authorId) {
            const createSolutionDto = Object.assign(Object.assign({}, createSolutionBodyDto), { _task: createSolutionBodyDto.taskId, _user: authorId });
            this.solutionsService.create(createSolutionDto);
        }
    }
};
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SolutionsController.prototype, "findOne", null);
__decorate([
    common_1.Post(""),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_solution_dto_1.CreateSolutionBodyDto, Object]),
    __metadata("design:returntype", void 0)
], SolutionsController.prototype, "create", null);
SolutionsController = __decorate([
    common_1.Controller("api/solutions"),
    __metadata("design:paramtypes", [solutions_service_1.SolutionsService])
], SolutionsController);
exports.SolutionsController = SolutionsController;
//# sourceMappingURL=solutions.controller.js.map