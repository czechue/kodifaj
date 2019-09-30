import express, { Request, Response } from "express";
import next from "next";

// @ts-ignore
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/a", (req: Request, res: Response) => {
    return app.render(req, res, "/a", req.query);
  });

  server.get("/b", (req: Request, res: Response) => {
    return app.render(req, res, "/b", req.query);
  });

  server.get("/posts/:id", (req: Request, res: Response) => {
    return app.render(req, res, "/posts", {
      id: req.params.id,
    });
  });

  server.get("api/post", (req: Request, res: Response) => {
    const {id} = req.query;
    return res.send(id)
  });

  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
