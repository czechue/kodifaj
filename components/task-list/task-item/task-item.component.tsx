import React, { ReactElement } from "react";
import Link from "next/link";
import { Task } from "../../../lib/types/task";

interface BadgeProps {
  children: string;
}
function BadgeComponent({ children }: BadgeProps) {
  return (
    <span className="inline-block mr-1 bg-pink-200 text-pink-700 text-xs px-1 rounded">
      #{children}
    </span>
  );
}

interface TaskItemProps {
  task: Task;
}
export default function TaskItemComponent({
  task
}: TaskItemProps): ReactElement {
  return (
    <div className="w-full my-4 md:px-2 md:w-1/3">
      <Link href={"/tasks/[id]"} as={`/tasks/${task._id.toString()}`}>
        <a>
          <div className="relative pb-5/6 ">
            <img
              className="absolute h-full w-full object-cover rounded-lg overflow-hidden shadow-md"
              src={task.images[0]}
              alt={task.title}
            />
          </div>
          <div className="relative -mt-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-gray-600 text-xs font-semibold uppercase tracking-widest">
                {task._user.login}
              </div>
              <h4 className="font-semibold text-lg leading-tight">
                {task.title}
              </h4>
              {task.tags && (
                <div className="mt-1">
                  {task.tags.map((t, index) => (
                    <BadgeComponent key={index}>{t}</BadgeComponent>
                  ))}
                </div>
              )}
              <div className="mt-4 flex items-center text-xs">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-4 h4 fill-current text-pink__accent"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}{" "}
                {task.reviewCount && (
                  <span className="text-xs text-gray-600 ml-2">
                    ({task.reviewCount} głosów)
                  </span>
                )}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
