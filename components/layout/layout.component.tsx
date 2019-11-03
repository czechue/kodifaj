import React, { ReactElement } from "react";
import NavbarComponent from "../navbar/navbar.component";
import {User} from "../../providers/user.provider";

interface LayoutProps {
  children: ReactElement | ReactElement[];
  withHero?: boolean;
  user: User;
}
export default function LayoutComponent({
  user,
  withHero,
  children
}: LayoutProps): ReactElement {
  return (
    <div className="antialiased text-gray-900">
      <NavbarComponent user={user} withHero={withHero} />
      <main className="container mx-auto py-8 px-4 md:py-12 md:px-8">
        {children}
      </main>
    </div>
  );
}
