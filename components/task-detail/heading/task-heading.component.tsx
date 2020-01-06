import HeadingComponent from '../../shared/heading/heading.component';
import React from 'react';

export const TaskHeading = ({ children }: { children: string }) => (
  <HeadingComponent
    CustomTag="h2"
    orientation="left"
    size="2xl"
    font="thin"
    tracking="wide"
  >
    {children}
  </HeadingComponent>
);
