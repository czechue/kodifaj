import React, { Component } from "react";
import { NextPageContext } from "next";
import fetch from "isomorphic-unfetch";
import {Task} from "../../lib/interfaces";

import "../../static/style.css";
import {HOSTNAME} from "../../lib/hostname.config";

interface Props {
  task: Task
}
export default class extends Component<Props> {
  static async getInitialProps({ query: { id } }: NextPageContext) {
    const res = await fetch(`${HOSTNAME}/api/tasks/${id}`);
    const task = await res.json();
    return { task };
  }

  render() {
    return (
      <div>
        <h1>My course id: #{this.props.task.title}</h1>
      </div>
    );
  }
}
