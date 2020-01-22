import { NewTaskForm, NewTaskMapped } from '../new-task.component';

export default function mapFormToNewTaskFormat(
  task: NewTaskForm,
): NewTaskMapped {
  return {
    ...task,
    tips: task.tips?.length ? task.tips.map(tip => tip.tip) : [],
    images: task.images?.length ? task.images.map(image => image.image) : [],
    tags: task.tags ? task.tags.split(',').map(s => s.trim()) : [],
  };
}
