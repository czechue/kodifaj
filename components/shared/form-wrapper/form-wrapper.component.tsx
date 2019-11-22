import React, { ReactElement } from "react";

export default function FormWrapperComponent({ children }: FormWrapperProps) {
  return (
    <div className="flex flex-wrap -mx-1 overflow-hidden max-w-3xl ml-auto mr-auto">
      <div className="py-4 px-4 bg-gray-800 my-1 px-1 w-full rounded sm:rounded-r-none overflow-hidden sm:w-3/4 bg-pink_bg">
        {children}
      </div>
      <div className="hidden bg-yellow-800 my-1 px-1 w-full sm:rounded-r overflow-hidden sm:block sm:w-1/4 bg-gradient-navbar relative">
        <img
          src="/static/images/object.svg"
          alt="object"
          className="absolute right-0 min-w-full"
          style={{ top: "50px" }}
        />
      </div>
    </div>
  );
}

interface FormWrapperProps {
  children: ReactElement;
}
