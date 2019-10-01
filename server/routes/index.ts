import {Express, Request, Response} from "express";
import Server from "next/dist/next-server/server/next-server";

export default function routes(app: Server, server: Express) {
	server.get("/course/:id", (req: Request, res: Response) => {
		return app.render(req, res, "/course", {
			id: req.params.id
		});
	});

	server.get("/courses", (req: Request, res: Response) => {
		return app.render(req, res, "/courses");
	});
}
