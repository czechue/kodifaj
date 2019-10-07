import React, { ReactElement } from "react";
import NavbarComponent from "../navbar/navbar.component";

interface LayoutProps {
  children: ReactElement | ReactElement[];
}
export default function LayoutComponent({
  children
}: LayoutProps): ReactElement {
  return (
    <div className="antialiased text-gray-900">
      <NavbarComponent />
      <main>{children}</main>
    </div>
  );
}
