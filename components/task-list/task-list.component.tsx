import React, { ReactElement } from "react";
import TaskItemComponent from "./task-item/task-item.component";
import HeadingComponent from "../shared/heading/heading.component";
import {Task} from "../../lib/types/task";

interface TaskListProps {
  tasks?: Task[];
}
export default function TaskListComponent({
  tasks
}: TaskListProps): ReactElement | null {
  if (!tasks) {
    return null;
  }

  return (
    <>
      <div className="mb-4">
        <HeadingComponent CustomTag="span" size="xsm" color="pink_primary">
          Sprawdź i rozwiąż...
        </HeadingComponent>
        <HeadingComponent CustomTag="h2">Najnowsze Zadania</HeadingComponent>
      </div>
      <div className="flex flex-wrap md:-mx-2">
        {tasks.length && tasks.map(task => (
          <TaskItemComponent key={task._id} task={task} />
        ))}
      </div>
    </>
  );
}
