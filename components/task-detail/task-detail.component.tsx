import React, { useState } from 'react';
import { Task } from '../../lib/types/task';
import CarouselComponent from './carousel/carousel.component';
import AsideComponent from './aside/aside.component';
import ContentComponent from './content/content.component';
import HeadingComponent from '../shared/heading/heading.component';
import addSolution, { AddSolutionFormData } from './utils/add-solution.util';
import { Solution } from '../../lib/types/solution';

export default function TaskDetailComponent({
  images,
  title,
  content,
  createdAt,
  _user,
  difficulty,
  tags,
  repo,
  _solutions,
  _id,
  updateSolutions,
}: TaskDetailProps) {
  const [loading, setLoading] = useState(false);

  function handleOnSubmitSolution({
    repo,
    demo,
    comment,
  }: AddSolutionFormData) {
    setLoading(true);
    addSolution({ repo, demo, comment, taskId: _id })
      .then(({ data }) => {
        updateSolutions(data);
      })
      .finally(() => setLoading(false));
  }

  return (
    <>
      <div className="mb-5">
        <HeadingComponent orientation="left" size="normal">
          {title}
        </HeadingComponent>
      </div>
      <article className="task-detail__wrapper">
        <section className="task-detail__carousel sm:p-2">
          <CarouselComponent images={images} />
        </section>
        <section className="task-detail__aside sm:pl-12">
          <AsideComponent
            createdAt={createdAt}
            author={_user.login}
            tags={tags}
            difficulty={difficulty}
            repo={repo}
          />
        </section>
        <section className="task-detail__content sm:p-2">
          <ContentComponent
            content={content}
            solutions={_solutions}
            onSubmit={handleOnSubmitSolution}
            loading={loading}
          />
        </section>
      </article>
    </>
  );
}

interface TaskDetailProps extends Task {
  updateSolutions: (solutions: Solution[]) => void;
}
