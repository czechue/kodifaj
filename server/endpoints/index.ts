import { Express, Request, Response } from "express";
import courses from "../../dummy/courses";

export default function endpoints(server: Express) {
  server.get(
    "/api/courses",
    (_req: Request, res: Response): Response => {
      return res.send(courses);
    }
  );

  server.get(
    "/api/courses/:id",
    (req: CourseRequest, res: Response): Response => {
      const courseId = Number(req.params.id) - 1;
      return res.send(courses[courseId]);
    }
  );
}

interface CourseRequest extends Request {
  params: {
    id: string;
  };
}
