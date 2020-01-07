import { Task } from '../../../lib/types/task';
import { NewTaskForm } from '../new-task.component';

export default function taskMapper(task: Task): NewTaskForm {
  return {
    content: task.content,
    repo: task.repo,
    images: task.images.map(image => ({
      image,
    })),
    tips: task.tips.map(tip => ({ tip })),
    title: task.title,
    tags: task.tags.join(','),
  };
}
