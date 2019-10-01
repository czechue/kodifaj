import React, { Component } from "react";
import { NextPageContext } from "next";
import fetch from "isomorphic-unfetch";
import {Course} from "../../interfaces";

interface Props {
  course: Course
}
export default class extends Component<Props> {
  static async getInitialProps({ query: { id } }: NextPageContext) {
    const res = await fetch(`http://localhost:3000/api/courses/${id}`);
    const course = await res.json();
    return { course };
  }

  render() {
    return (
      <div>
        <h1>My course id: #{this.props.course.name}</h1>
      </div>
    );
  }
}
