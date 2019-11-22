import React from "react";
import HeadingComponent from "../../shared/heading/heading.component";
import SolutionComponent from "../solution/solution.component";

const Heading = ({ children }: { children: string }) => (
  <HeadingComponent
    CustomTag="h2"
    orientation="left"
    size="2xl"
    font="thin"
    tracking="wide"
  >
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
        <Heading>Twoje rozwiązanie</Heading>
        <div className="bg-pink_bg w-full p-4">
          <SolutionComponent />
        </div>
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
