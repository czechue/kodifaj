import React, { ReactElement } from 'react';
import Link from 'next/link';

interface MobileLinkProps {
  children: string | ReactElement;
  url: string;
  routerLink?: boolean;
  classNames?: string;
}

export default function NavigationLinkComponent({
  children,
  url,
  routerLink = false,
  classNames = '',
}: MobileLinkProps) {
  const className = `block mb-1 px-2 py-1 text-gray-200 font-semibold hover:bg-violet_primary sm:uppercase sm:font-normal sm:text-xs sm:mb-0 ${classNames}`;

  const href = (
    <a href={url} className={className}>
      {children}
    </a>
  );

  const link = (
    <Link href={url}>
      <a className={className}>{children}</a>
    </Link>
  );

  return routerLink ? link : href;
}
