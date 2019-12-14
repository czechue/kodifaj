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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = require("@nestjs/passport");
const passport_github2_1 = require("passport-github2");
const common_1 = require("@nestjs/common");
const keys_1 = __importDefault(require("../../config/keys"));
const users_service_1 = require("../users/users.service");
let GithubStrategy = class GithubStrategy extends passport_1.PassportStrategy(passport_github2_1.Strategy, 'github') {
    constructor(usersService) {
        super({
            clientID: keys_1.default.githubClientID,
            clientSecret: keys_1.default.githubClientSecret,
            callbackURL: '/auth/github/callback',
            scope: `profile email`,
        });
        this.usersService = usersService;
    }
    async validate(_accessToken, _refreshToken, profile) {
        const existingUser = await this.usersService.findOne({
            githubId: profile.id,
        });
        if (existingUser) {
            return existingUser;
        }
        try {
            this.usersService.create(profile);
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
};
GithubStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], GithubStrategy);
exports.GithubStrategy = GithubStrategy;
//# sourceMappingURL=github.strategy.js.map