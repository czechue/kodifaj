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
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TasksService = class TasksService {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async findAll() {
        return await this.taskModel
            .find()
            .populate('_user', 'login')
            .exec();
    }
    async findOne(id) {
        return await this.taskModel
            .findById(id)
            .populate('_user')
            .populate({ path: '_solutions', model: 'Solution', populate: '_user' });
    }
    async create(task) {
        const createdTask = new this.taskModel(task);
        try {
            await createdTask.save();
            return createdTask;
        }
        catch (e) {
            console.log('error');
        }
    }
};
TasksService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Task')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map