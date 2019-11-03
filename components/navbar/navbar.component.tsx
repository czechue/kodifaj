import React, { ReactElement, useState } from "react";
import classNames from "clsx";

import MobileButtonComponent from "./mobile-button/mobile-button.component";
import NavigationLinkComponent from "./navigation-link/navigation-link.component";
import HeadingComponent from "../heading/heading.component";

import "../../static/style.css";
import Link from "next/link";
import { User } from "../../providers/user.provider";
import AccountDropdownComponent from "./account-dropdown/account-dropdown.component";

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
    {
      block: isMobileMenuOpen,
      hidden: !isMobileMenuOpen
    },
    "sm:flex"
  );

  const navLinks = (
    <>
      <NavigationLinkComponent classNames="sm:mr-4" url="/tasks" routerLink>
        Zadania
      </NavigationLinkComponent>
      <NavigationLinkComponent classNames="sm:mr-4" url="/ranking" routerLink>
        Ranking
      </NavigationLinkComponent>
      <NavigationLinkComponent classNames="sm:mr-4" url="/faq" routerLink>
        Pomoc
      </NavigationLinkComponent>
      <span className="hidden sm:block sm:mr-4 text-white">|</span>
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

        {!user && (
          <nav className={mobileLinksContainerClassName}>
            <div className="px-2 pb-2 sm:flex sm:items-center sm:bg-transparent sm:pb-0">
              {navLinks}
            </div>
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
          </nav>
        )}

        {user && (
          <nav className={mobileLinksContainerClassName}>
            <div className="px-2 pb-2 sm:flex sm:items-center sm:bg-transparent sm:pb-0">
              {navLinks}
              <AccountDropdownComponent
                classNames="hidden sm:block sm:ml-6"
                user={user}
              />
            </div>

            <div className="px-4 py-5 border-t border-pink__accent sm:hidden">
              <div className="flex items-center">
                <img
                  className="h-8 w-8 border-2 rounded-full object-cover"
                  src={user.photo}
                  alt="user photo"
                />
                <span className="ml-3 font-semibold text-white">
                  {user.login}
                </span>
              </div>

              <div className="mt-4">
                <Link href={`/users/${user._id}`}>
                  <a
                    className="block text-white hover:text-violet_primary"
                  >
                    Twoje konto
                  </a>
                </Link>
                <a
                  href="#"
                  className="mt-2 block text-white hover:text-violet_primary"
                >
                  Dodaj zadanie
                </a>
                <a
                  href="/api/logout"
                  className="mt-2 block text-white hover:text-violet_primary"
                >
                  Wyloguj się
                </a>
              </div>
            </div>
          </nav>
        )}
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
            od Juniora do Mentora
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
