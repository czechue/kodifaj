import React, { ReactElement, useState } from "react";
import classNames from "clsx";

import MobileButtonComponent from "./mobile-button/mobile-button.component";
import MobileLinkComponent from "./mobile-link/mobile-link.component";

import "../../static/style.css";
interface NavbarComponentProps {
  user: string;
}
export default function NavbarComponent({
  user
}: NavbarComponentProps): ReactElement {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileLinksContainerClassName = classNames(
    "px-2 pb-2 sm:flex sm:bg-transparent sm:pb-0",
    {
      block: isMobileMenuOpen,
      hidden: !isMobileMenuOpen
    }
  );

  const userLinks = (
    <>
      {!user && (
        <>
          <MobileLinkComponent url="/auth/google">
            Zaloguj z google
          </MobileLinkComponent>
          <MobileLinkComponent url="/auth/github">
            Zaloguj z githubem
          </MobileLinkComponent>
        </>
      )}
      {user && (
        <MobileLinkComponent url={`/users/${user}`} routerLink>
          <>User: {user}</>
        </MobileLinkComponent>
      )}
      {user && (
        <MobileLinkComponent url="/api/logout">Wyloguj się</MobileLinkComponent>
      )}
    </>
  );

  return (
    <div className="bg-gradient-navbar">
      <header className="sm:flex sm:justify-between sm:items-center sm:max-w-6xl sm:ml-auto sm:mr-auto">
        <div className="flex items-center justify-between p-4 h-20">
          <div>
            <img className="h-8" src="/static/Logo.png" alt="Logo" />
          </div>
          <div className="sm:hidden">
            <MobileButtonComponent
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
        <div className={mobileLinksContainerClassName}>
          <MobileLinkComponent url="/" routerLink>
            Zadania
          </MobileLinkComponent>
          {userLinks}
        </div>
      </header>
    </div>
  );
}
