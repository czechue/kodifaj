import React from "react";
import { ReactElement } from "react";
import clsx from "clsx";

export default function HeadingComponent({
  CustomTag = "h1",
  color = "violet_primary",
  orientation = "center",
  size = "lg",
  children
}: HeadingProps): ReactElement {
  const headingClassNames = clsx("block",{
    "text-4xl": size === "lg",
    "text-base": size === "xsm",
    "text-center": orientation === "center",
    "text-left": orientation === "left",
    "text-violet_primary": color === "violet_primary",
    "text-pink_primary": color === "pink_primary"
  });

  return <CustomTag className={headingClassNames}>{children}</CustomTag>;
}

interface HeadingProps {
  CustomTag?: keyof JSX.IntrinsicElements;
  color?: "violet_primary" | "pink_primary",
  orientation?: "center" | "left";
  size?: "lg" | "md" | "sm" | "xsm";
  children: string;
}
