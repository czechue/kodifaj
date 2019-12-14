import React, { ReactElement } from 'react';
import { Solution } from '../../../lib/types/solution';
import SolutionItemComponent from '../../shared/solution-item/solution-item.component';

export default function SolutionsComponent({
  solutions,
}: SolutionsProps): ReactElement | null {
  if (!solutions.length) {
    return null;
  }

  return (
    <article className="">
      <div className="w-full flex justify-between flex-wrap">
        {solutions.map(solution => (
          <div key={solution._id} className="w-1/3 px-2 mb-2 lg:w-1/4">
            <SolutionItemComponent solution={solution} />
          </div>
        ))}
      </div>
    </article>
  );
}

interface SolutionsProps {
  solutions: Solution[];
}
