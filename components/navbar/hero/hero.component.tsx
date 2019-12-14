import HeadingComponent from '../../shared/heading/heading.component';
import React from 'react';

const bgImage = {
  backgroundImage: `url(/static/images/Objects.svg)`,
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
};

export default function HeroComponent() {
  return (
    <div
      className="hidden sm:flex justify-center flex-col h-100 bg-local"
      style={bgImage}
    >
      <HeadingComponent color="white" size="normal" classNames="opacity-50">
        Najlepsze zadania z web dev
      </HeadingComponent>
      <HeadingComponent color="white" font="bold" size="xlg">
        od Juniora do Mentora
      </HeadingComponent>
    </div>
  );
}
