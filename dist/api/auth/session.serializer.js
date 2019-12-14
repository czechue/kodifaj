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
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
let SessionSerializer = class SessionSerializer extends passport_1.PassportSerializer {
    constructor(usersService) {
        super();
        this.usersService = usersService;
    }
    serializeUser(user, done) {
        done(null, user.id);
    }
    deserializeUser(id, done) {
        this.usersService
            .findOne({ _id: id })
            .then(user => done(null, user))
            .catch(error => done(error));
    }
};
SessionSerializer = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], SessionSerializer);
exports.SessionSerializer = SessionSerializer;
//# sourceMappingURL=session.serializer.js.map