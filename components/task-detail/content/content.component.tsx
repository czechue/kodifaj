import React from "react";

export default function ContentComponent({ content }: ContentProps) {
  return (
    <>
      <p>{content}</p>
    </>
  );
}

interface ContentProps {
  content: string;
}
