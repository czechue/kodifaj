import { Solution } from '../../../../lib/types/solution';
import React, { ReactElement } from 'react';
import SolutionBadgeComponent from '../solution-badge/solution-badge.component';
import SolutionLinkComponent from '../solution-link/solution-link.component';

export default function WithoutTaskDataComponent({
  solution,
}: SolutionProps): ReactElement {
  const date = new Date(solution.createdAt);
  return (
    <section className="w-full px-3 py-4 rounded text-sm shadow hover:shadow-md">
      <div className="flex items-center">
        <img
          className="h-8 w-8 rounded overflow-hidden shadow-md"
          src={solution._user.photo}
          alt="solution image"
        />
        <span className="pl-2">{solution._user.login}</span>
      </div>
      <span className="text-gray-600 text-xs">{date.toDateString()}</span>
      <div className="mt-2 flex items-center">
        <SolutionBadgeComponent>{solution.phase}</SolutionBadgeComponent>
        <div className="ml-3">
          <SolutionLinkComponent url={solution.repo}>
            GitHub
          </SolutionLinkComponent>
        </div>
        <div className="ml-3">
          <SolutionLinkComponent url={solution.demo}>
            Live
          </SolutionLinkComponent>
        </div>
      </div>
    </section>
  );
}

interface SolutionProps {
  solution: Solution;
}
