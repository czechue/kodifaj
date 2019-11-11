import React from "react";
import { UserProfil } from "../../../lib/interfaces";

export default function InfoComponent({ user }: InfoProps) {
  return (
    <>
      <div className="w-40">
        <img src={user.photo} alt="user photo" />
      </div>
      <span className="inline-block mt-4 text-violet_primary">
        <strong>{user.login}</strong>
      </span>
      <a target="_blank" href={`https://github.com/${user.login}`}>
        <img
          src="/static/images/github-icon.svg"
          className="mt-3 opacity-50 hover:opacity-100"
          alt="github icon"
        />
      </a>
      <p />
    </>
  );
}

interface InfoProps {
  user: UserProfil;
}
