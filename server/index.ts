import express, { Request, Response } from "express";
import next from "next";
import routes from "./routes";
import courses from "../dummy/courses";

// @ts-ignore
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get(
    "/api/courses",
    (_req: Request, res: Response): Response => {
      return res.send(courses);
    }
  );

  server.get(
    "/api/courses/:id",
    (_req: Request, res: Response): Response => {
      return res.send(courses);
    }
  );

  routes(app, server);

  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
