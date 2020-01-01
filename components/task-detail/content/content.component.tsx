import React, { useState } from 'react';
import HeadingComponent from '../../shared/heading/heading.component';
import SolutionFormComponent from './solution-form/solution-form.component';
import { Solution } from '../../../lib/types/solution';
import SolutionsComponent, {
  SolutionType,
} from '../../shared/solutions/solutions.component';

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

const SectionToggleIcon = ({ isOpen }: { isOpen: boolean }) => (
  <img
    className="mx-2 h-4 w-4"
    src={
      isOpen
        ? '/static/images/chevron-thin-right.svg'
        : '/static/images/chevron-thin-down.svg'
    }
    alt="section toggler"
  />
);

export default function ContentComponent({
  content,
  solutions = [],
  onSubmit,
  loading,
}: ContentProps) {
  const [openSections, setOpenedSections] = useState({
    solution: false,
    tips: false,
    solutions: false,
  });

  function toggleSection(section: OpenableSections) {
    setOpenedSections(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  }

  return (
    <>
      <section>
        <Heading>Zadanie</Heading>
        <p>{content}</p>
      </section>

      <section className="mt-6">
        <div className="flex">
          <Heading>Dodaj rozwiązanie</Heading>
          <button onClick={() => toggleSection(OpenableSections.SOLUTION)}>
            <SectionToggleIcon isOpen={openSections.solution} />
          </button>
        </div>
        {openSections.solution && (
          <div className="my-2">
            <SolutionFormComponent loading={loading} onSubmit={onSubmit} />
          </div>
        )}
      </section>

      <section>
        <div className="flex">
          <Heading>Wskazówki</Heading>
          <button onClick={() => toggleSection(OpenableSections.TIPS)}>
            <SectionToggleIcon isOpen={openSections.tips} />
          </button>
        </div>
        {openSections.tips && <p className="my-2">{content}</p>}
      </section>

      <section>
        <div className="flex">
          <Heading>Rozwiązania</Heading>
          <button onClick={() => toggleSection(OpenableSections.SOLITIONS)}>
            <SectionToggleIcon isOpen={openSections.solutions} />
          </button>
        </div>
        {openSections.solutions && (
          <div className="my-2">
            <SolutionsComponent
              type={SolutionType.WithoutTaskData}
              solutions={solutions}
            />
          </div>
        )}
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

enum OpenableSections {
  SOLUTION = 'solution',
  TIPS = 'tips',
  SOLITIONS = 'solutions',
}
