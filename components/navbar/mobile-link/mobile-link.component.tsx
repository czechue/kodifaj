import React, {ReactElement} from "react";

interface MobileLinkProps {
  children: string | ReactElement;
  url: string;
}

export default function MobileLinkComponent({
  children,
  url
}: MobileLinkProps) {
  return (
    <a
      href={url}
      className="block mb-1 px-2 py-1 text-gray-200 font-semibold hover:bg-violet_primary sm:uppercase sm:font-normal sm:text-xs sm:mb-0"
    >
      {children}
    </a>
  );
}
