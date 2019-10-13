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
    <div className="flex flex-wrap md:-mx-2">
      {tasks.map(task => (
        <TaskItemComponent key={task.id} task={task} />
      ))}
    </div>
  );
}
