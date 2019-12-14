"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
// tslint:disable-next-line:variable-name
exports.User = common_1.createParamDecorator((_data, req) => req.user);
//# sourceMappingURL=user.decorator.js.map