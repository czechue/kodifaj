import { Express, Request, Response } from "express";
import tasks from "../../dummy/tasks";
import * as mongoose from "mongoose";

const User = mongoose.model("users");
const Task = mongoose.model("tasks");

export default function endpoints(server: Express) {
  server.get(
    "/api/tasks",
    (_req: Request, res: Response): Response => {
      return res.send(tasks);
    }
  );

  server.get(
    "/api/tasks/:id",
    (req: EnhancedRequest, res: Response): Response => {
      const taskId = Number(req.params.id) - 1;

      // pobiernie z DB
      return res.send(tasks[taskId]);
    }
  );

  server.post(
    "/api/tasks",
    async (req: any, res: Response): Promise<void> => {
      const { content, images, tips, title } = req.body;
      const authorId = req?.user?._id;

      const task = new Task({
        content,
        images,
        tips,
        title,
        _user: authorId
      });

      try {
        await task.save();
        res.send(task);
      } catch (err) {
        res.send( err);
      }
    }
  );

  server.get(
    "/api/users/:id",
    async (req: EnhancedRequest, res: Response): Promise<Response> => {
      const user = await User.findOne({ _id: req.params.id });
      return res.send(user);
    }
  );
}

interface EnhancedRequest extends Request {
  params: {
    id: string;
  };
}
