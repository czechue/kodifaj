import React, { ReactElement } from "react";
import NavbarComponent from "../navbar/navbar.component";

interface LayoutProps {
  children: ReactElement | ReactElement[];
  user: string;
}
export default function LayoutComponent({
  user,
  children
}: LayoutProps): ReactElement {
  return (
    <div className="antialiased text-gray-900">
      <NavbarComponent user={user}/>
      <main className="flex -mx-2 my-6 max-w-6xl ml-auto mr-auto">
        {children}
      </main>
    </div>
  );
}
