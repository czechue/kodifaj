import React, { useCallback, useEffect, useState } from "react";
import { User } from "../../../providers/user.provider";
import Link from "next/link";

export default function AccountDropdownComponent({
  user,
  classNames
}: AccountDropdownInterface) {
  const [isOpen, setIsOpen] = useState(false);

  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape" || event.key === "Esc") {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, []);

  return (
    <div className={`relative ml-1 ${classNames}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-violet_primary focus:outline-none focus:border-white"
      >
        <img
          className="h-full w-full object-cover"
          src={user.photo}
          alt="user photo"
        />
      </button>
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          tabIndex={-1}
          className="fixed inset-0 w-full h-full bg-black opacity-50 cursor-default z-10"
        />
      )}

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
          <Link href={`/users/${user._id}`}>
            <a className="block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white">
              Twoje konto
            </a>
          </Link>
          <Link href="/tasks/new">
            <a className="block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white">
              Dodaj zadanie
            </a>
          </Link>
          <a
            href="/api/logout"
            className="block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white"
          >
            Wyloguj się
          </a>
        </div>
      )}
    </div>
  );
}

interface AccountDropdownInterface {
  user: User;
  classNames: string;
}
