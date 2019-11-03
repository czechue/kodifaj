import React from "react";
import Link from "next/link";

const Title = ({ children }: { children: string }) => (
  <span className="block mb-2 text-sm font-semibold tracking-wider text-violet_primary">
    {children}
  </span>
);

const LabeledValue = ({ value, label }: LabeledValueProps) => (
  <div className="text-sm text-gray-600">
    {label}:<span className="text-gray-800 ml-2">{value}</span>
  </div>
);

const HelpLink = ({ href, image, children }: HelpLinkProps) => (
  <Link href={href}>
    <a className="group flex items-center">
      <img
        src={image}
        className="h-4 opacity-50 group-hover:opacity-100"
        alt="help"
      />
      <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-800">
        {children}
      </span>
    </a>
  </Link>
);

interface HelpLinkProps {
  children: string;
  image: string;
  href: string;
}

interface LabeledValueProps {
  value: string;
  label: string;
}

export default function AsideComponent({
  createdAt,
  author,
  technologies,
  difficulty,
  repo
}: TaskAsideProps) {
  const difficultyVal = `${difficulty.toString()} / 5`;
  return (
    <>
      <section>
        <Title>Źródła</Title>
        <a href={repo}>
          <img
            src="/static/github-icon.svg"
            className="mt-3 opacity-50 hover:opacity-100"
            alt="github icon"
          />
        </a>
      </section>
      <section className="mt-6">
        <Title>Informacje o zadaniu</Title>
        <div className="mt-3">
          <LabeledValue value={createdAt} label="Data" />
        </div>
        <div className="mt-2">
          <LabeledValue value={author} label="Autor" />
        </div>
        <div className="mt-2">
          <LabeledValue value={technologies} label="Tagi" />
        </div>
        <div className="mt-2">
          <LabeledValue value={difficultyVal} label="Skala trudności" />
        </div>
      </section>
      <section className="mt-6">
        <Title>Potrzebujesz pomocy?</Title>
        <div className="mt-3">
          <HelpLink href="/faq" image="/static/help.svg">
            Jak zacząć?
          </HelpLink>

        </div>
        <div className="mt-2">
          <HelpLink href="#" image="/static/lock.svg">
            Wskazówki
          </HelpLink>
        </div>
        <div className="mt-2">
          <HelpLink href="#" image="/static/lock.svg">
            Rozwiązania
          </HelpLink>
        </div>
      </section>
    </>
  );
}

interface TaskAsideProps {
  createdAt: string;
  author: string;
  technologies: string;
  difficulty: number;
  repo: string;
}
