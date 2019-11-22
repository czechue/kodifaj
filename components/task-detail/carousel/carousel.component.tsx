import React, { Component } from "react";
import Carousel from "nuka-carousel";
import clsx from "clsx";

const CarouselButton = ({
  slide,
  right = false
}: {
  slide: () => void;
  right?: boolean;
}) => {
  const buttonClassNames = clsx(
    "flex justify-center h-12 w-12 rounded bg-white opacity-50 hover:opacity-75",
    {
      "ml-2": !right,
      "mr-2": right
    }
  );

  return (
    <button className={buttonClassNames} onClick={slide}>
      <img
        src={
          right
            ? "/static/images/chevron-thin-right.svg"
            : "/static/images/chevron-thin-left.svg"
        }
        className="h-8"
        alt="carousel button"
      />
    </button>
  );
};

type CarouselProps = {
  images: string[];
};

export default class CarouselComponent extends Component<CarouselProps> {
  public render() {
    const { images } = this.props;
    return (
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <CarouselButton slide={previousSlide} />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <CarouselButton slide={nextSlide} right />
        )}
        renderBottomCenterControls={null}
        heightMode={"max"}
        slidesToShow={1.5}
        cellAlign={"center"}
        cellSpacing={8}
        wrapAround
      >
        {images.map((image, i) => (
          <div key={i} className="relative pb-5/6 md:pb-3/5 ">
            <img
              className="absolute h-full w-full object-cover rounded-lg overflow-hidden shadow-md"
              src={image}
              alt="task pic"
            />
          </div>
        ))}
      </Carousel>
    );
  }
}
