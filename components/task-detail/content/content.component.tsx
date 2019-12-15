import React from 'react';
import HeadingComponent from '../../shared/heading/heading.component';
import SolutionFormComponent from './solution-form/solution-form.component';
import { Solution } from '../../../lib/types/solution';
import SolutionsComponent from './solutions/solutions.component';

const Heading = ({ children }: { children: string }) => (
  <HeadingComponent
    CustomTag="h2"
    orientation="left"
    size="2xl"
    font="thin"
    tracking="wide"
    classNames="mb-2"
  >
    {children}
  </HeadingComponent>
);

export default function ContentComponent({
  content,
  solutions = [],
  onSubmit,
  loading,
}: ContentProps) {
  return (
    <>
      <section>
        <Heading>Zadanie</Heading>
        <p>{content}</p>
      </section>

      <section className="mt-6">
        <Heading>Twoje rozwiązanie</Heading>
        <SolutionFormComponent loading={loading} onSubmit={onSubmit} />
      </section>

      <section className="mt-6">
        <Heading>Wskazówki</Heading>
        <p>{content}</p>
      </section>

      <section className="mt-6">
        <Heading>Rozwiązania</Heading>
        <SolutionsComponent solutions={solutions} />
      </section>
    </>
  );
}

interface ContentProps {
  content: string;
  solutions: Solution[];
  onSubmit: (value: any) => void;
  loading: boolean;
}
