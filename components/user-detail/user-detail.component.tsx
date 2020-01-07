import React from 'react';
import InfoComponent from './info/info.component';
import HeadingComponent from '../shared/heading/heading.component';
import { UserProps } from '../../lib/types/props';
import SolutionsComponent, {
  SolutionType,
} from '../shared/solutions/solutions.component';
import TaskItemComponent from '../task-list/task-item/task-item.component';

const Heading = ({ children }: { children: string }) => (
  <HeadingComponent orientation="left" size="2xl" font="thin" tracking="wide">
    {children}
  </HeadingComponent>
);

export default function UserDetailComponent({
  userProfile,
  isAdmin,
}: UserDetailProps) {
  return (
    <div className="flex flex-wrap -mx-1 overflow-hidden">
      <div className="my-1 px-1 w-full overflow-hidden sm:w-1/4 sm:order-last">
        <InfoComponent userProfile={userProfile} />
      </div>
      <div className="my-1 px-1 w-full overflow-hidden sm:w-3/4 sm:order-first">
        <Heading>Twoje rozwiązania</Heading>
        <SolutionsComponent
          type={SolutionType.WithoutUserData}
          solutions={userProfile._solutions}
        />

        <Heading>Twoje zadania</Heading>
        <div className="flex flex-wrap md:-mx-2 flex-list__container">
          {userProfile._tasks.length &&
            userProfile._tasks.map(task => (
              <TaskItemComponent key={task._id} task={task} admin={isAdmin} />
            ))}
        </div>
      </div>
    </div>
  );
}

interface UserDetailProps {
  userProfile: UserProps;
  isAdmin: boolean;
}
