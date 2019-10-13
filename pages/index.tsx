import React, { useContext } from "react";
import fetch from "isomorphic-unfetch";
import { NextPage } from "next";
import { HOSTNAME } from "../lib/hostname.config";

import TaskListComponent from "../components/task-list/task-list.component";
import LayoutComponent from "../components/layout/layout.component";
import { UserContext } from "../providers/user.provider";

import "../static/style.css";

import { Task } from "../lib/interfaces";
interface Props {
  tasks: Task[];
}

const HomePage: NextPage<Props> = ({ tasks }) => {
  const { user } = useContext(UserContext);
  return (
    <LayoutComponent user={user}>
      <TaskListComponent tasks={tasks} />
    </LayoutComponent>
  );
};

HomePage.getInitialProps = async () => {
  const res = await fetch(`${HOSTNAME}/api/tasks`);
  const tasks = await res.json();
  return { tasks };
};

export default HomePage;
