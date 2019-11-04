import { NextPage } from "next";
import React, { useContext } from "react";
import { UserContext} from "../../providers/user.provider";
import LayoutComponent from "../../components/layout/layout.component";
import NewTaskComponent from "../../components/new-task/new-task.component";

const TaskNewPage: NextPage = () => {
  const { user } = useContext(UserContext);

  return (
    <LayoutComponent user={user}>
      <NewTaskComponent user={user} />
    </LayoutComponent>
  );
};

export default TaskNewPage;

