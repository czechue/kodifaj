import React from "react";
import { Task } from "../../lib/types/task";
import CarouselComponent from "./carousel/carousel.component";
import AsideComponent from "./aside/aside.component";
import ContentComponent from "./content/content.component";
import HeadingComponent from "../shared/heading/heading.component";

export default function TaskDetailComponent({
  images,
  title,
  content,
  createdAt,
  _user,
  difficulty,
  tags,
  repo
}: Task) {
  console.log('login', _user.login)

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
          <ContentComponent content={content} />
        </section>
      </article>
    </>
  );
}
