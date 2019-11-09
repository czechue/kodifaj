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
    (req: EnchancedRequest, res: Response): Response => {
      const taskId = Number(req.params.id) - 1;

      // pobiernie z DB
      return res.send(tasks[taskId]);
    }
  );

  server.post(
    "/api/tasks",
    async (req: Request, res: Response): Promise<void> => {
      const { content, images, tips, title } = req.body;

      const task = new Task({
        content,
        images,
        tips,
        title
      });

      try {
        console.log('task', task)
        await task.save();
        res.send(task);
      } catch (err) {
        // res.send(400, err);
      }
    }
  );

  server.get(
    "/api/users/:id",
    async (req: EnchancedRequest, res: Response): Promise<Response> => {
      const user = await User.findOne({ _id: req.params.id });
      return res.send(user);
    }
  );
}

interface EnchancedRequest extends Request {
  params: {
    id: string;
  };
}
