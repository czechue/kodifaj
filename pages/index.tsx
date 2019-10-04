import React, { Component } from "react";
import { Task } from "../interfaces";

import fetch from "isomorphic-unfetch";

import TaskListComponent from "../components/task-list/task-list.component";
import NavbarComponent from "../components/navbar/navbar.component";

import "../assets/style.css";
import {NextPageContext} from "next";

interface Props {
  tasks: Task[];
}
export default class extends Component<Props> {
  static async getInitialProps({req}: NextPageContext) {
    if (req) {
    const res = await fetch("https://tranquil-crag-25841.herokuapp.com/api/tasks");
    const tasks = await res.json();
    return { tasks };

    }
  }

  render() {
    return (
      <div className="antialiased text-gray-900">
        <NavbarComponent />
        <main>
          <div className="">
            <TaskListComponent tasks={this.props.tasks} />
          </div>
        </main>
      </div>
    );
  }
}
