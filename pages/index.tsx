import React, { Component } from "react";
import { Task } from "../lib/interfaces";

import fetch from "isomorphic-unfetch";

import TaskListComponent from "../components/task-list/task-list.component";
import NavbarComponent from "../components/navbar/navbar.component";

import "../static/style.css";
import {HOSTNAME} from "../lib/hostname.config";

interface Props {
  tasks: Task[];
}
export default class extends Component<Props> {
  static async getInitialProps() {
    const res = await fetch(`${HOSTNAME}/api/tasks`);
    const tasks = await res.json();
    return { tasks };
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
