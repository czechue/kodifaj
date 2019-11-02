import React from "react";
import { Task } from "../../lib/interfaces";

export default function TaskDetailComponent({ avatarUrl, title }: Task) {
  return (
    <article className="flex flex-wrap md:-mx-2">
      <div className="w-full my-4 md:px-2 md:w-2/3">
        <div className="flex justify-between">
          <button className="">Left</button>
          <img className="ml-auto mr-auto" src={`/static/${avatarUrl}`} alt="" />
          <button className="">Right</button>
        </div>
      </div>
      <section className="w-full my-4 md:px-2 md:w-1/3">
        <h1 className="text-xl mb-2">{title}</h1>
        <p className="text-xs text-gray-600">Tresc</p>
        <h6>Drugi opis</h6>
        <div>Tresc 2</div>
      </section>
    </article>
  );
}
