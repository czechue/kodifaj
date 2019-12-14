import React, { useContext } from "react";
import { NextPage, NextPageContext } from "next";
import fetch from "isomorphic-unfetch";
import { Task } from "../../../lib/types/task";

import { UserContext } from "../../../providers/user.provider";
import { HOSTNAME } from "../../../lib/hostname.config";

import LayoutComponent from "../../../components/shared/layout/layout.component";
import TaskDetailComponent from "../../../components/task-detail/task-detail.component";

import "../../../public/static/style.css";

const TaskPage: NextPage<Props> = ({ task }) => {
  const { user } = useContext(UserContext);

  return (
    <LayoutComponent user={user}>
      <TaskDetailComponent {...task} />
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
