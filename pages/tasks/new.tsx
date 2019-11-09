import { NextPage } from "next";
import axios from 'axios';
import React, { useContext } from "react";
import { UserContext } from "../../providers/user.provider";
import LayoutComponent from "../../components/layout/layout.component";
import NewTaskComponent, {
  NewTask
} from "../../components/new-task/new-task.component";
import {HOSTNAME} from "../../lib/hostname.config";

const TaskNewPage: NextPage = () => {
  const { user } = useContext(UserContext);

  const onSubmit = (task: NewTask) => {
    console.log("here", task);
    axios.post(`${HOSTNAME}/api/tasks`, task)
      .then(() => console.log('add to server'))
  };

  return (
    <LayoutComponent user={user}>
      <NewTaskComponent onSubmit={onSubmit} />
    </LayoutComponent>
  );
};

export default TaskNewPage;
