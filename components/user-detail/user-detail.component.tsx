import React from 'react';
import InfoComponent from './info/info.component';
import HeadingComponent from '../shared/heading/heading.component';
import { UserProps } from '../../lib/types/props';

const Heading = ({ children }: { children: string }) => (
  <HeadingComponent orientation="left" size="2xl" font="thin" tracking="wide">
    {children}
  </HeadingComponent>
);

export default function UserDetailComponent({ user }: UserDetailProps) {
  return (
    <div className="flex flex-wrap -mx-1 overflow-hidden">
      <div className="my-1 px-1 w-full overflow-hidden sm:w-1/4 sm:order-last">
        <InfoComponent user={user} />
      </div>
      <div className="my-1 px-1 w-full overflow-hidden sm:w-3/4 sm:order-first">
        <Heading>Twoje rozwiązania</Heading>
        <pre>{JSON.stringify(user._solutions, null, 2)}</pre>
        <Heading>Twoje zadania</Heading>
        <pre>{JSON.stringify(user._tasks, null, 2)}</pre>
      </div>
    </div>
  );
}

interface UserDetailProps {
  user: UserProps;
}
