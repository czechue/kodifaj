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
Object.defineProperty(exports, '__esModule', { value: true });
exports.SolutionsModule = void 0;
const common_1 = require('@nestjs/common');
const mongoose_1 = require('@nestjs/mongoose');
const solutions_controller_1 = require('./solutions.controller');
const solutions_service_1 = require('./solutions.service');
const solutions_schema_1 = require('./schemas/solutions.schema');
const task_schema_1 = require('../tasks/schemas/task.schema');
const tasks_service_1 = require('../tasks/tasks.service');
const user_schema_1 = require('../users/schemas/user.schema');
const users_service_1 = require('../users/users.service');
let SolutionsModule = /** @class */ (() => {
  let SolutionsModule = class SolutionsModule {};
  SolutionsModule = __decorate(
    [
      common_1.Module({
        imports: [
          mongoose_1.MongooseModule.forFeature([
            { name: 'Solution', schema: solutions_schema_1.SolutionSchema },
            { name: 'Task', schema: task_schema_1.TaskSchema },
            { name: 'User', schema: user_schema_1.UserSchema },
          ]),
        ],
        controllers: [solutions_controller_1.SolutionsController],
        providers: [
          solutions_service_1.SolutionsService,
          tasks_service_1.TasksService,
          users_service_1.UsersService,
        ],
      }),
    ],
    SolutionsModule,
  );
  return SolutionsModule;
})();
exports.SolutionsModule = SolutionsModule;
//# sourceMappingURL=solutions.module.js.map
