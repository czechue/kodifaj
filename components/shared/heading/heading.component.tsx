import React from 'react';
import { ReactElement } from 'react';
import clsx from 'clsx';

export default function HeadingComponent({
  CustomTag = 'h1',
  color = 'violet_primary',
  orientation = 'center',
  size = 'lg',
  font = 'normal',
  tracking = 'normal',
  classNames,
  children,
}: HeadingProps): ReactElement {
  const headingClassNames = clsx(
    'block',
    {
      'text-base': size === 'xsm',
      'text-lg': size === 'normal',
      'text-2xl': size === '2xl',
      'text-4xl': size === 'lg',
      'text-6xl': size === 'xlg',
      'text-center': orientation === 'center',
      'text-left': orientation === 'left',
      'text-violet_primary': color === 'violet_primary',
      'text-pink_primary': color === 'pink_primary',
      'text-white': color === 'white',
      'font-bold': font === 'bold',
      'font-thin': font === 'thin',
      'tracking-wide': tracking === 'wide',
    },
    classNames,
  );

  return <CustomTag className={headingClassNames}>{children}</CustomTag>;
}

interface HeadingProps {
  CustomTag?: keyof JSX.IntrinsicElements;
  color?: 'violet_primary' | 'pink_primary' | 'white';
  orientation?: 'center' | 'left';
  size?: 'xsm' | 'normal' | 'lg' | '2xl' | 'xlg';
  font?: 'thin' | 'normal' | 'bold';
  tracking?: 'normal' | 'wide';
  classNames?: string;
  children: string;
}
