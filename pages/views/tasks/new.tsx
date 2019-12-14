import { NextPage } from "next";
import axios from "axios";
import React, { useContext } from "react";
import { UserContext } from "../../../providers/user.provider";
import LayoutComponent from "../../../components/shared/layout/layout.component";
import NewTaskComponent, {
  NewTaskMapped
} from "../../../components/new-task/new-task.component";

import { HOSTNAME } from "../../../lib/hostname.config";

const TaskNewPage: NextPage = () => {
  const { user } = useContext(UserContext);

  const onSubmit = (task: NewTaskMapped) => {
    return axios.post<NewTaskMapped>(`${HOSTNAME}/api/tasks`, task);
  };

  return (
    <LayoutComponent user={user}>
      <NewTaskComponent onSubmit={onSubmit} />
    </LayoutComponent>
  );
};

export default TaskNewPage;
