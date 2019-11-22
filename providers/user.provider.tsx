import React, { ReactElement, useState } from "react";
import axios from "axios";
import { HOSTNAME } from "../lib/hostname.config";

export const UserContext = React.createContext({
  user: {
    _id: "",
    githubId: "",
    login: "",
    photo: ""
  },
  login: () => {},
  logout: () => {}
});

export default function UserProvider({ children, user }: UserProviderProps) {
  const [userState, setUserState] = useState(user);

  function login() {
    setUserState(user);
  }

  // todo: use this logout function instead of href
  function logout() {
    axios.get(`${HOSTNAME}/api/logout`);
  }

  const context = {
    user: userState,
    login,
    logout
  };
  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
}

interface UserProviderProps {
  children: ReactElement;
  user: User;
}

export interface User {
  _id: string;
  githubId: string;
  login: string;
  photo: string;
}
