import { Express, Request, Response } from "express";
import * as mongoose from "mongoose";

const User = mongoose.model("users");
const Task = mongoose.model("tasks");
const Solution = mongoose.model("solutions");

export default function endpoints(server: Express) {
  server.get(
    "/api/tasks",
    async (_req: Request, res: Response, next: any): Promise<Response | void> => {
      try {
        const tasks = await Task.find().populate("_user", "login");
        return res.send(tasks);
      } catch (e) {
        return next(e)
      }
    }
  );

  server.get(
    "/api/tasks/:id",
    async (req: EnhancedRequest, res: Response, next: any): Promise<Response | void> => {
      const taskId = req?.params?.id;
      const task = Task.findById(taskId).populate("_user");
      const solutions = Solution.find({ _task: taskId }).populate("_user");

      return Promise.all([task, solutions])
      .then(([taskRes, solutionsRes]: any) => {
        return res.send({
          ...taskRes?._doc,
          solutions: solutionsRes
        });
      })
      .catch(next)
    }
  );

  server.post(
    "/api/tasks",
    async (req: any, res: Response, next: any): Promise<Response | void> => {
      const { content, images, tips, title, tags } = req.body;
      const authorId = req?.user?._id;

      const task = new Task({
        content,
        images,
        tips,
        title,
        tags,
        reviewCount: 1,
        _user: authorId
      });

      try {
        await task.save();
        res.send(task);
      } catch (err) {
        next(err);
      }
    }
  );

  server.post(
    "/api/solutions",
    async (req: any, res: Response, next: any): Promise<Response | void> => {
      const { repo, demo, comment, taskId, phase } = req.body;
      const authorId = req?.user?._id;

      const solution = new Solution({
        repo,
        demo,
        comment,
        phase,
        _task: taskId,
        _user: authorId
      });

      try {
        await solution.save();
        res.send(solution);
      } catch (err) {
        next(err)
      }
    }
  );

  server.get(
    "/api/users/:id",
    async (req: EnhancedRequest, res: Response, next: any): Promise<Response | void> => {
      try {
        const user = await User.findOne({ _id: req.params.id });
        return res.send(user);
      } catch (err) {
        next(err)
      }
    }
  );
}

interface EnhancedRequest extends Request {
  params: {
    id: string;
  };
}
