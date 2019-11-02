import React from "react";

export default function CarouselComponent({ images }: CarouselProps) {
  return (
    <div className="flex justify-between">
      <button className="">Left</button>
      <img className="ml-auto mr-auto" src={images[0]} alt="" />
      <button className="">Right</button>
    </div>
  );
}

interface CarouselProps {
  images: string[];
}
