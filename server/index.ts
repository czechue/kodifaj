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

  if (!dev) {
    // Enforce SSL & HSTS in production
    server.use(function(req, res, next) {
      var proto = req.headers["x-forwarded-proto"];
      if (proto === "https") {
        res.set({
          "Strict-Transport-Security": "max-age=31557600" // one-year
        });
        return next();
      }
      res.redirect("https://" + req.headers.host + req.url);
    });
  }

  // Allows for cross origin domain request:
  server.use(function(_req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  endpoints(server);
  routes(app, server);

  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
