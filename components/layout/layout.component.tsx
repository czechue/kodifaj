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
      <main className="container mx-auto py-8 px-4 md:py-12 md:px-8">
        {children}
      </main>
    </div>
  );
}
