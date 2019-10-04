import { Express, Request, Response } from "express";
import tasks from "../../dummy/tasks";

export default function endpoints(server: Express) {
  server.get(
    "/api/tasks",
    (_req: Request, res: Response): Response => {
      return res.send(tasks);
    }
  );

  server.get(
    "/api/tasks/:id",
    (req: CourseRequest, res: Response): Response => {
      const courseId = Number(req.params.id) - 1;
      return res.send(tasks[courseId]);
    }
  );
}

interface CourseRequest extends Request {
  params: {
    id: string;
  };
}
