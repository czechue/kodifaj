import React, { ReactElement } from "react";
import { Task } from "../../lib/interfaces";
import TaskItemComponent from "./task-item/task-item.component";
import HeadingComponent from "../shared/heading/heading.component";

interface TaskListProps {
  tasks: Task[];
}
export default function TaskListComponent({
  tasks
}: TaskListProps): ReactElement {
  return (
    <>
      <div className="mb-4">
        <HeadingComponent CustomTag="span" size="xsm" color="pink_primary">
          Sprawdź i rozwiąż...
        </HeadingComponent>
        <HeadingComponent CustomTag="h2">Najnowsze Zadania</HeadingComponent>
      </div>
      <div className="flex flex-wrap md:-mx-2">
        {tasks.map(task => (
          <TaskItemComponent key={task._id} task={task} />
        ))}
      </div>
    </>
  );
}
