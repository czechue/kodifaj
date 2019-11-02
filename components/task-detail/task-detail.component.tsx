import React from "react";
import { Task } from "../../lib/interfaces";
import CarouselComponent from "./carousel/carousel.component";
import AsideComponent from "./aside/aside.component";
import ContentComponent from "./content/content.component";
import HeadingComponent from "../heading/heading.component";

export default function TaskDetailComponent({
  images,
  title,
  content,
  createdAt,
  author,
  technologies,
  difficulty,
  repo
}: Task) {
  const technologiesList = technologies.join(", ");

  return (
    <>
      <div className="mb-5">
        <HeadingComponent orientation="left" size="normal">
          {title}
        </HeadingComponent>
      </div>
      <article className="task-detail__wrapper">
        <section className="task-detail__carousel">
          <CarouselComponent images={images} />
        </section>
        <section className="task-detail__aside">
          <AsideComponent
            createdAt={createdAt}
            author={author}
            technologies={technologiesList}
            difficulty={difficulty}
            repo={repo}
          />
        </section>
        <section className="task-detail__content">
          <ContentComponent content={content} />
        </section>
      </article>
    </>
  );
}
