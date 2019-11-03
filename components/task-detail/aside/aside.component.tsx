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
      <img src={image} className="h-4 opacity-50 group-hover:opacity-100" alt="help" />
      <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-800">{children}</span>
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
  return <>
      <section>
        <Title>Źródła</Title>
        <a  href={repo}>
          <img src="/static/github-icon.svg" className="opacity-50 hover:opacity-100" alt="github icon" />
        </a>
      </section>
      <section className="mt-6">
        <Title>Informacje o zadaniu</Title>
        <LabeledValue value={createdAt} label="Data" />
        <LabeledValue value={author} label="Autor" />
        <LabeledValue value={technologies} label="Tagi" />
        <LabeledValue value={difficultyVal} label="Skala trudności" />
      </section>
      <section className="mt-6">
        <Title>Potrzebujesz pomocy?</Title>
        <HelpLink href="/faq" image="/static/help.svg">
          Jak zacząć?
        </HelpLink>
        <div className="mt-1">
          <HelpLink href="#" image="/static/lock.svg">
            Wskazówki
          </HelpLink>
        </div>
        <div className="mt-1">
          <HelpLink href="#" image="/static/lock.svg">
            Rozwiązania
          </HelpLink>
        </div>
      </section>
    </>;
}

interface TaskAsideProps {
  createdAt: string;
  author: string;
  technologies: string;
  difficulty: number;
  repo: string;
}
