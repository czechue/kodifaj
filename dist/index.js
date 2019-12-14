"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const nest_next_1 = require("nest-next");
const next_1 = __importDefault(require("next"));
require("reflect-metadata");
const application_module_1 = require("./application.module");
const cookie_session_1 = __importDefault(require("cookie-session"));
const passport_1 = __importDefault(require("passport"));
const keys_1 = __importDefault(require("./config/keys"));
// @ts-ignore
const port = process.env.PORT || 3000;
async function bootstrap() {
    const dev = process.env.NODE_ENV !== "production";
    const app = next_1.default({ dev });
    await app.prepare();
    const server = await core_1.NestFactory.create(application_module_1.AppModule);
    server.use(cookie_session_1.default({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys_1.default.cookieKey]
    }));
    server.use(passport_1.default.initialize());
    server.use(passport_1.default.session());
    const reflector = server.get(core_1.Reflector);
    void reflector;
    const renderer = server.get(nest_next_1.RenderModule);
    renderer.register(server, app);
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
}
bootstrap();
//# sourceMappingURL=index.js.map