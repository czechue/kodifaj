import React, { ReactElement } from "react";
import { Task } from "../../lib/interfaces";
import TaskItemComponent from "./task-item/task-item.component";

interface TaskListProps {
  tasks: Task[];
}
export default function TaskListComponent({
  tasks
}: TaskListProps): ReactElement {
  return (
    <section className="flex -mx-2 my-6 max-w-6xl ml-auto mr-auto">
      {tasks.map(task => (
        <TaskItemComponent key={task.id} task={task} />
      ))}
    </section>
  );
}
