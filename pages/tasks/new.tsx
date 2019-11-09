import { NextPage } from "next";
import React, { useContext } from "react";
import { UserContext } from "../../providers/user.provider";
import LayoutComponent from "../../components/layout/layout.component";
import NewTaskComponent, {
  NewTask
} from "../../components/new-task/new-task.component";

const TaskNewPage: NextPage = () => {
  const { user } = useContext(UserContext);

  const onSubmit = (task: NewTask) => {
    console.log("here", task);
  };

  return (
    <LayoutComponent user={user}>
      <NewTaskComponent onSubmit={onSubmit} />
    </LayoutComponent>
  );
};

export default TaskNewPage;
