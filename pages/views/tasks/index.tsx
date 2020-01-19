import React, { useContext } from 'react';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import { HOSTNAME } from '../../../lib/hostname.config';

import { Task } from '../../../lib/types/task';
import { UserContext } from '../../../components/providers/user.provider';

import TaskListComponent from '../../../components/task-list/task-list.component';
import LayoutComponent from '../../../components/shared/layout/layout.component';

import '../../../public/static/style.css';

const HomePage: NextPage<Props> = ({ tasks }) => {
  const { user } = useContext(UserContext);

  return (
    <LayoutComponent user={user} withHero>
      <div className="py-8 px-4">
        <TaskListComponent tasks={tasks} />
      </div>
    </LayoutComponent>
  );
};

HomePage.getInitialProps = async () => {
  try {
    const res = await fetch(`${HOSTNAME}/api/tasks`);
    const tasks = await res.json();
    return { tasks };
  } catch (e) {
    return { tasks: [] };
  }
};

export default HomePage;

interface Props {
  tasks: Task[];
}
