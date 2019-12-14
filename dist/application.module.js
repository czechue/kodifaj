"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const nest_next_1 = require("nest-next");
const mongoose_1 = require("@nestjs/mongoose");
const keys_1 = __importDefault(require("./config/keys"));
const tasks_module_1 = require("./api/tasks/tasks.module");
const users_module_1 = require("./api/users/users.module");
const solutions_module_1 = require("./api/solutions/solutions.module");
const home_render_controller_1 = require("./routes/home-render.controller");
const tasks_render_controller_1 = require("./routes/tasks-render.controller");
const users_render_controller_1 = require("./routes/users-render.controller");
const auth_module_1 = require("./api/auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            nest_next_1.RenderModule,
            mongoose_1.MongooseModule.forRoot(keys_1.default.mongoURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            }),
            users_module_1.UsersModule,
            solutions_module_1.SolutionsModule,
            tasks_module_1.TasksModule,
            auth_module_1.AuthModule
        ],
        controllers: [
            home_render_controller_1.HomeRenderController,
            tasks_render_controller_1.TasksRenderController,
            users_render_controller_1.UsersRenderController
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=application.module.js.map