import React, { Component } from "react";
import { NextPageContext } from "next";

interface Props {
  courseId: string;
}
export default class extends Component<Props> {
  static getInitialProps({ query: { id } }: NextPageContext) {
    return { courseId: id };
  }

  render() {
    return (
      <div>
        <h1>My course id: #{this.props.courseId}</h1>
      </div>
    );
  }
}
