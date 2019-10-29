import React, { ReactElement, useState } from "react";
import classNames from "clsx";

import MobileButtonComponent from "./mobile-button/mobile-button.component";
import NavigationLinkComponent from "./navigation-link/navigation-link.component";
import HeadingComponent from "../heading/heading.component";

import "../../static/style.css";
import Link from "next/link";
import { User } from "../../providers/user.provider";

const bgImage = {
  backgroundImage: `url(/static/Objects.svg)`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat"
};

export default function NavbarComponent({
  user,
  withHero = false
}: NavbarComponentProps): ReactElement {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileLinksContainerClassName = classNames(
    "px-2 pb-2 sm:flex sm:items-center sm:bg-transparent sm:pb-0",
    {
      block: isMobileMenuOpen,
      hidden: !isMobileMenuOpen
    }
  );

  const userLinks = (
    <>
      {!user && (
        <>
          <NavigationLinkComponent url="/auth/github">
            <button className="flex items-center">
              <img
                src="/static/github-icon.svg"
                alt="github icon"
                className="opacity-50"
              />
              <span className="pl-2 sm:uppercase sm:font-normal sm:text-xs">
                Rejestracja
              </span>
            </button>
          </NavigationLinkComponent>
        </>
      )}
      {user && (
        <NavigationLinkComponent url={`/users/${user}`} routerLink>
          <div className="flex items-center">
            <img src={user.photo} alt="user photo" className="w-6" />
          </div>
        </NavigationLinkComponent>
      )}
      {user && (
        <>
          <NavigationLinkComponent url="/api/logout">
            Wyloguj się
          </NavigationLinkComponent>

          <div>
            <button className="block h-8 w-8 rounded-full overflow-hidden border-2 border-violet_primary focus:outline-none focus:border-white">
              <img
                className="h-full w-full object-cover"
                src={user.photo}
                alt="user photo"
              />
            </button>
            <div className="mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white">Twoje konto</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white">Dodaj zadanie</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white">Wyloguj się</a>
            </div>
          </div>
        </>
      )}
    </>
  );

  return (
    <div className="bg-gradient-navbar">
      <header className="sm:flex sm:justify-between sm:items-center sm:max-w-6xl sm:ml-auto sm:mr-auto">
        <div className="flex items-center justify-between p-4 h-20">
          <Link href="/">
            <a>
              <span className="text-white text-2xl">Kodifaj</span>
            </a>
          </Link>

          <div className="sm:hidden">
            <MobileButtonComponent
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
        <nav className={mobileLinksContainerClassName}>
          <NavigationLinkComponent classNames="sm:mr-3" url="/tasks" routerLink>
            Zadania
          </NavigationLinkComponent>
          <NavigationLinkComponent
            classNames="sm:mr-3"
            url="/ranking"
            routerLink
          >
            Ranking
          </NavigationLinkComponent>
          <NavigationLinkComponent classNames="sm:mr-3" url="/faq" routerLink>
            Pomoc
          </NavigationLinkComponent>
          <span className="hidden sm:block sm:mr-3 text-white">|</span>
          {userLinks}
        </nav>
      </header>
      {withHero && (
        <div
          className="hidden sm:flex justify-center flex-col h-100 bg-local"
          style={bgImage}
        >
          <HeadingComponent color="white" size="normal" classNames="opacity-50">
            Najlepsze zadania z web dev
          </HeadingComponent>
          <HeadingComponent color="white" font="bold" size="xlg">
            Dla juniorów i mentorów
          </HeadingComponent>
        </div>
      )}
    </div>
  );
}

interface NavbarComponentProps {
  user: User;
  withHero?: boolean;
}
