import React, { ReactElement, useState } from "react";
import axios from "axios";
import { HOSTNAME } from "../lib/hostname.config";

export const UserContext = React.createContext({
  user: "",
  login: () => {},
  logout: () => {}
});

export default function UserProvider({ children, userId = "" }: UserProviderProps) {
  const [user, setUser] = useState(userId);

  function login() {

    console.log('login');
    setUser('user')
  }

  function logout() {
    axios.get(`${HOSTNAME}/api/logout`);
  }

  const context = {
    user,
    login,
    logout
  };
  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
}

interface UserProviderProps {
  children: ReactElement;
  userId?: string;
}
