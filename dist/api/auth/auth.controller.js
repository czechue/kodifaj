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
const github_guard_1 = require("../common/guards/github.guard");
const public_guard_1 = require("../common/guards/public.guard");
const user_decorator_1 = require("../common/decorators/user.decorator");
let AuthController = class AuthController {
    async githubLogin() {
        // GithubStrategy to redirect to github login page
    }
    githubLoginCallback(user) {
        return user;
    }
    logout(req, res) {
        // @ts-ignore
        req.logout();
        req.logout();
        res.redirect('/');
    }
};
__decorate([
    public_guard_1.Public(),
    common_1.UseGuards(github_guard_1.GithubGuard),
    common_1.Get('/github'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "githubLogin", null);
__decorate([
    public_guard_1.Public(),
    common_1.Get('/github/callback'),
    common_1.UseGuards(github_guard_1.GithubGuard),
    common_1.Redirect('/'),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "githubLoginCallback", null);
__decorate([
    public_guard_1.Public(),
    common_1.HttpCode(204),
    common_1.Get('logout'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    common_1.Controller('/auth')
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map