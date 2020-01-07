import React, { useContext } from 'react';
import { NextPage, NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';
import { Task } from '../../../lib/types/task';

import { UserContext } from '../../../components/providers/user.provider';
import { HOSTNAME } from '../../../lib/hostname.config';

import LayoutComponent from '../../../components/shared/layout/layout.component';

import '../../../public/static/style.css';
import NewTaskComponent, {
  NewTaskMapped,
} from '../../../components/new-task/new-task.component';
import axios from 'axios';

const TaskPage: NextPage<Props> = ({ task, taskId }) => {
  const { user } = useContext(UserContext);

  const onSubmit = (task: NewTaskMapped) => {
    return axios.put<NewTaskMapped>(`${HOSTNAME}/api/tasks/${taskId}`, task);
  };

  return (
    <LayoutComponent user={user}>
      <NewTaskComponent task={task} onSubmit={onSubmit} />
    </LayoutComponent>
  );
};

TaskPage.getInitialProps = async ({ query: { id } }: NextPageContext) => {
  const taskId = id as string;
  const res = await fetch(`${HOSTNAME}/api/tasks/${id}`);
  const task = await res.json();
  return { task, taskId };
};

export default TaskPage;

interface Props {
  task: Task;
  taskId: string;
}
