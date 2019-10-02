import React, { Component } from "react";

import fetch from "isomorphic-unfetch";
import Link from "next/dist/client/link";

import { Course } from "../interfaces";

import '../assets/style.css'

interface Props {
  courses: Course[];
}
export default class extends Component<Props> {
  static async getInitialProps() {
    const res = await fetch("http://localhost:3000/api/courses");
    const courses = await res.json();
    return { courses };
  }

  render() {
    return (
      <div>
        <h1 className="p-3 hover:bg-indigo-500">Courses</h1>
        {this.props.courses.map(course => (
          <div key={course.id}>
            <Link href={"/courses/[id]"} as={`/courses/${course.id.toString()}`}>
              <a>{course.name}</a>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
