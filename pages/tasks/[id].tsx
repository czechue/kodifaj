import React, { useContext } from "react";
import { NextPage, NextPageContext } from "next";
import fetch from "isomorphic-unfetch";

import { Task } from "../../lib/interfaces";
import { HOSTNAME } from "../../lib/hostname.config";

import { UserContext } from "../../providers/user.provider";
import LayoutComponent from "../../components/layout/layout.component";

import "../../static/style.css";

interface Props {
  task: Task;
}

const TaskPage: NextPage<Props> = ({ task }) => {
  const { title, imageUrl } = task;
  const { user } = useContext(UserContext);
  return (
    <LayoutComponent user={user}>
      <article className="flex mb-4 -mx-4 w-full">
        <div className="w-2/3 px-4 bg-gray-500 relative">
          <button className="absolute left-0">Left</button>
          <button className="absolute right-0">Right</button>
          <img className="ml-auto mr-auto" src={`/static/${imageUrl}`} alt="" />
        </div>
        <section className="w-1/3 px-4 bg-gray-400">
          <h1>My course id: #{title}</h1>
          <div>Tresc</div>
          <h6>Drugi opis</h6>
          <div>Tresc 2</div>
        </section>
      </article>
    </LayoutComponent>
  );
};

TaskPage.getInitialProps = async ({ query: { id } }: NextPageContext) => {
  const res = await fetch(`${HOSTNAME}/api/tasks/${id}`);
  const task = await res.json();
  return { task };
};

export default TaskPage;
