import React, { ReactElement } from 'react';
import { Solution } from '../../../lib/types/solution';
import WithoutTaskDataComponent from './solution-item/without-task-data.component';
import WithoutUserDataComponent from './solution-item/without-user-data.component';

export default function SolutionsComponent({
  solutions,
  type,
}: SolutionsProps): ReactElement | null {
  if (!solutions.length) {
    return null;
  }

  if (type === SolutionType.WithoutTaskData) {
    return (
      <div className="w-full flex justify-between flex-wrap flex-list__container">
        {solutions.map(solution => (
          <div key={solution._id} className="w-full px-2 mb-2 md:w-1/2">
            <WithoutTaskDataComponent solution={solution} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full flex justify-between flex-wrap flex-list__container">
      {solutions.map(solution => (
        <div key={solution._id} className="w-full px-2 mb-2 md:w-1/2">
          <WithoutUserDataComponent solution={solution} />
        </div>
      ))}
    </div>
  );
}

export enum SolutionType {
  WithoutUserData,
  WithoutTaskData,
}

interface SolutionsProps {
  solutions: Solution[];
  type: SolutionType;
}
