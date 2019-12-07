import { NestFactory } from "@nestjs/core";
import { RenderModule } from "nest-next";
import next from "next";
import "reflect-metadata";
import { AppModule } from "./application.module";

import mongoose from "mongoose";
import keys from "./config/keys";
import passport from "passport";
// import bodyParser from "body-parser";
import cookieSession from "cookie-session";

// MODELS:
import "./models/User";
import "./models/Task";
import "./models/Solution";

import passportService from "./services/passport";
// import tasksRoutes from "./routes/tasks.routes";
// import endpoints from "./endpoints";
// import authRoutes from "./routes/auth.routes";

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// @ts-ignore
const port = process.env.PORT || 3000;

async function bootstrap() {
  const dev = process.env.NODE_ENV !== "production";
  const app = next({ dev });

  await app.prepare();
  await passportService();

  const server = await NestFactory.create(AppModule);

  // server.use(bodyParser.json());
  server.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );
  server.use(passport.initialize());
  server.use(passport.session());

  // endpoints(server);
  // authRoutes(app, server);
  // tasksRoutes(app, server);

  const renderer = server.get(RenderModule);
  renderer.register(server, app);

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
}

bootstrap();

// app.prepare().then(() => {
//   passportService();
//
//   const server = express();
//
//   server.use(bodyParser.json());
//   server.use(
//     cookieSession({
//       maxAge: 30 * 24 * 60 * 60 * 1000,
//       keys: [keys.cookieKey]
//     })
//   );
//   server.use(passport.initialize());
//   server.use(passport.session());
//
//   endpoints(server);
//   authRoutes(app, server);
//   tasksRoutes(app, server);
//
//   server.use((err: any, _req: Request, res: Response, _next: any) => {
//     res.status(422).send({ error: err.message });
//   });
//
//   server.all("*", (req: Request, res: Response) => {
//     return handle(req, res);
//   });
//
//   server.listen(port, () => {
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });
