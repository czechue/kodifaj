import React from "react";
import Link from "next/link";

export default () => (
  <ul>
    <Link href="/courses" as="/courses">
      <a>Courses</a>
    </Link>
  </ul>
);
