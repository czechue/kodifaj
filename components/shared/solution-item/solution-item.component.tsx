import { Solution } from "../../../lib/types/solution";
import React, { ReactElement } from "react";

interface BadgeProps {
  children: string;
}

function BadgeComponent({ children }: BadgeProps) {
  return (
    <span className="inline-block mr-1 bg-pink-200 text-pink-700 text-xs px-1 rounded">
      #{children}
    </span>
  );
}

function LinkComponent({ children, url }: { children: string; url: string }) {
  return (
    <a
      className="block text-violet_primary hover:text-gray-800 underline font-semibold w-full text-center"
      href={url}
    >
      {children}
    </a>
  );
}

export default function SolutionItemComponent({
  solution
}: SolutionProps): ReactElement {
  return (
    <section className="w-full h-48 p-2 rounded text-sm shadow hover:shadow-md">
      <BadgeComponent>{solution.phase}</BadgeComponent>
      <img
        src={solution._user.photo}
        className="my-2 w-16 h-16 mx-auto rounded-full"
        alt="solution card"
      />
      <span className="block mb-2 text-sm text-gray-600 w-full text-center">
        {solution._user.login}
      </span>
      <LinkComponent url={solution.repo}>GitHub</LinkComponent>
      <LinkComponent url={solution.demo}>Live</LinkComponent>
    </section>
  );
}

interface SolutionProps {
  solution: Solution;
}
