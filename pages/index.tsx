import React, { useContext } from "react";
import fetch from "isomorphic-unfetch";
import { NextPage } from "next";
import { HOSTNAME } from "../lib/hostname.config";

import TaskListComponent from "../components/task-list/task-list.component";
import LayoutComponent from "../components/shared/layout/layout.component";
import { Task } from "../lib/types/task";
import { UserContext } from "../providers/user.provider";

import "../static/style.css";

const HomePage: NextPage<Props> = ({ tasks }) => {
  const { user } = useContext(UserContext);

  return (
    <LayoutComponent user={user} withHero>
      <TaskListComponent tasks={tasks} />
    </LayoutComponent>
  );
};

HomePage.getInitialProps = async () => {
  const res = await fetch(`${HOSTNAME}/api/tasks`);
  try {
    const tasks = await res.json();
    return { tasks };
  } catch (e) {
    return {tasks: []}
  }
};

export default HomePage;

interface Props {
  tasks: Task[];
}
