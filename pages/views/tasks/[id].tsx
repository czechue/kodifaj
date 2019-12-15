import React, { useContext, useState } from 'react';
import { NextPage, NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';
import { Task } from '../../../lib/types/task';

import { UserContext } from '../../../components/providers/user.provider';
import { HOSTNAME } from '../../../lib/hostname.config';

import LayoutComponent from '../../../components/shared/layout/layout.component';
import TaskDetailComponent from '../../../components/task-detail/task-detail.component';

import '../../../public/static/style.css';

// todo: string[] do naprawy typ, error handling

async function fetchTask(id: string | string[]) {
  const res = await fetch(`${HOSTNAME}/api/tasks/${id}`);
  const task = await res.json();
  return { task };
}

const TaskPage: NextPage<Props> = ({ task }) => {
  const { user } = useContext(UserContext);
  const [currentTask, setCurrentTask] = useState<Task>(task);

  async function refresh() {
    const refreshedProps = await fetchTask(task._id);
    setCurrentTask(refreshedProps.task);
  }

  return (
    <LayoutComponent user={user}>
      <TaskDetailComponent updateTaskData={refresh} {...currentTask} />
    </LayoutComponent>
  );
};

TaskPage.getInitialProps = async ({ query: { id } }: NextPageContext) => {
  return fetchTask(id);
};

export default TaskPage;

interface Props {
  task: Task;
}
