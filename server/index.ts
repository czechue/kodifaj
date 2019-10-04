import express, { Request, Response } from "express";
import next from "next";
import routes from "./routes";
import endpoints from "./endpoints";

// @ts-ignore
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  endpoints(server);
  routes(app, server);

  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
