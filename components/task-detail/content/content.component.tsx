import React from "react";
import HeadingComponent from "../../shared/heading/heading.component";
import SolutionFormComponent from "../solution-form/solution-form.component";
import { Solution } from "../../../lib/types/solution";

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

export default function ContentComponent({
  content,
  solutions = [],
  onSubmit
}: ContentProps) {
  return (
    <>
      <section>
        <Heading>Zadanie</Heading>
        <p>{content}</p>
      </section>

      <section className="mt-6">
        <Heading>Twoje rozwiązanie</Heading>
        <div className="bg-pink_bg w-full p-4">
          <SolutionFormComponent onSubmit={onSubmit} />
        </div>
      </section>

      <section className="mt-6">
        <Heading>Wskazówki</Heading>
        <p>{content}</p>
      </section>

      <section className="mt-6">
        <Heading>Rozwiązania</Heading>
        {solutions.length &&
          solutions.map(solution => (
            <>
              <div>repo: {solution.repo}</div>
              <div>author: {solution.userId}</div>
            </>
          ))}
      </section>
    </>
  );
}

interface ContentProps {
  content: string;
  solutions: Solution[];
  onSubmit: (value: any) => void;
}
