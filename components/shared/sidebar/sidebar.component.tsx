import React, { ReactElement } from 'react';

export default function SidebarComponent(
  props: SidebarComponentProps,
): ReactElement {
  const { title, description, textLink, urlLink } = props;

  return (
    <div>
      <p className="mb-3 text-purple-700 font-bold text-2xl">{title}</p>
      <p className="mb-8 text-purple-800">{description}</p>
      <a
        className="px-5 py-3 bg-red-500 rounded font-medium text-white inline-block"
        href={urlLink ? urlLink : '#'}
      >
        {textLink}
      </a>
    </div>
  );
}

export interface SidebarComponentProps {
  title: string;
  description: string;
  textLink: string;
  urlLink?: string;
}
