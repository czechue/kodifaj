import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import { Course } from "../interfaces";
import Link from "next/dist/client/link";

interface Props {
  courses: Course[];
}
export default class extends Component<Props> {
  static async getInitialProps() {
    const res = await fetch("http://localhost:3000/api/courses");
    const json = await res.json();
    return { courses: json };
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(course => (
          <div key={course.id}>
            <Link href={`/course/${course.id.toString()}`}>{course.name}</Link>
          </div>
        ))}
      </div>
    );
  }
}
