import React, { useContext, useState } from 'react';
import { NextPage, NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';
import { Task } from '../../../lib/types/task';

import { UserContext } from '../../../components/providers/user.provider';
import { HOSTNAME } from '../../../lib/hostname.config';

import LayoutComponent from '../../../components/shared/layout/layout.component';
import TaskDetailComponent from '../../../components/task-detail/task-detail.component';

import '../../../public/static/style.css';
import { Solution } from '../../../lib/types/solution';

const TaskPage: NextPage<Props> = ({ task }) => {
  const { user } = useContext(UserContext);
  const [currentTask, setCurrentTask] = useState<Task>(task);

  function updateSolutions(solutions: Solution[]) {
    setCurrentTask({ ...currentTask, _solutions: solutions });
  }

  return (
    <LayoutComponent user={user}>
      <TaskDetailComponent updateSolutions={updateSolutions} {...currentTask} />
    </LayoutComponent>
  );
};

TaskPage.getInitialProps = async ({ query: { id } }: NextPageContext) => {
  const res = await fetch(`${HOSTNAME}/api/tasks/${id}`);
  const task = await res.json();
  return { task };
};

export default TaskPage;

interface Props {
  task: Task;
}
