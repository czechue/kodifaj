import React from "react";
import { UserProfil } from "../../lib/interfaces";
import InfoComponent from "./info/info.component";
import HeadingComponent from "../shared/heading/heading.component";

const Heading = ({ children }: { children: string }) => (
  <HeadingComponent orientation="left" size="2xl" font="thin" tracking="wide">
    {children}
  </HeadingComponent>
);

export default function UserDetailComponent({ user }: UserDetailProps) {
  return (
    <div className="flex flex-wrap -mx-1 overflow-hidden">
      <div className="my-1 px-1 w-full overflow-hidden sm:w-1/4 sm:order-last">
        <InfoComponent user={user} />
      </div>
      <div className="my-1 px-1 w-full overflow-hidden sm:w-3/4 sm:order-first">
        <Heading>Twoje rozwiązania</Heading>
        <Heading>Twoje zadania</Heading>
      </div>
    </div>
  );
}

interface UserDetailProps {
  user: UserProfil;
}
