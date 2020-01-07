'use strict';
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function(k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const common_1 = require('@nestjs/common');
const tasks_service_1 = require('./tasks.service');
const task_body_dto_1 = require('./dto/task-body.dto');
let TasksController = class TasksController {
  constructor(tasksService) {
    this.tasksService = tasksService;
  }
  findAll() {
    return this.tasksService.findAll();
  }
  findOne(id) {
    return this.tasksService.findOne(id);
  }
  create(taskBodyDto, req) {
    var _a, _b;
    const authorId =
      (_b = (_a = req) === null || _a === void 0 ? void 0 : _a.user) === null ||
      _b === void 0
        ? void 0
        : _b._id;
    if (authorId) {
      const createTaskDto = Object.assign(Object.assign({}, taskBodyDto), {
        reviewCount: 1,
        _user: authorId,
      });
      this.tasksService.create(createTaskDto);
    }
  }
  update(id, taskBodyDto, req) {
    var _a, _b;
    const userId =
      (_b = (_a = req) === null || _a === void 0 ? void 0 : _a.user) === null ||
      _b === void 0
        ? void 0
        : _b._id;
    if (userId) {
      this.tasksService.update(id, taskBodyDto);
    }
  }
};
__decorate(
  [
    common_1.Get(''),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', Promise),
  ],
  TasksController.prototype,
  'findAll',
  null,
);
__decorate(
  [
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', Promise),
  ],
  TasksController.prototype,
  'findOne',
  null,
);
__decorate(
  [
    common_1.Post(''),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [task_body_dto_1.TaskBodyDto, Object]),
    __metadata('design:returntype', void 0),
  ],
  TasksController.prototype,
  'create',
  null,
);
__decorate(
  [
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __param(2, common_1.Req()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [
      String,
      task_body_dto_1.TaskBodyDto,
      Object,
    ]),
    __metadata('design:returntype', void 0),
  ],
  TasksController.prototype,
  'update',
  null,
);
TasksController = __decorate(
  [
    common_1.Controller('api/tasks'),
    __metadata('design:paramtypes', [tasks_service_1.TasksService]),
  ],
  TasksController,
);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map
