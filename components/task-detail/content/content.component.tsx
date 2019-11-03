import React from "react";
import HeadingComponent from "../../heading/heading.component";

const Heading = ({ children }: { children: string }) => (
  <HeadingComponent orientation="left" size="2xl" font="thin" tracking="wide">
    {children}
  </HeadingComponent>
);

export default function ContentComponent({ content }: ContentProps) {
  return (
    <>
      <section>
        <Heading>Zadanie</Heading>
        <p>{content}</p>
      </section>

      <section className="mt-6">
        <Heading>Wskazówki</Heading>
        <p>{content}</p>
      </section>
    </>
  );
}

interface ContentProps {
  content: string;
}
