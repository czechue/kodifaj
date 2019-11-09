import React, { ReactElement } from "react";

export default function FormWrapperComponent({ children }: FormWrapperProps) {
  return (
    <div className="flex flex-wrap -mx-1 overflow-hidden max-w-3xl ml-auto mr-auto">
      <div className="py-2 px-2 bg-gray-800 my-1 px-1 w-full overflow-hidden sm:w-3/4 bg-pink_bg">
        {children}
      </div>
      <div className="hidden bg-yellow-800 my-1 px-1 w-full overflow-hidden sm:block sm:w-1/4 bg-violet_primary" />
    </div>
  );
}

interface FormWrapperProps {
  children: ReactElement;
}
