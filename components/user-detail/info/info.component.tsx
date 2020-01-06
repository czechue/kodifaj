import React from 'react';
import { User } from '../../../lib/types/user';

export default function InfoComponent({ userProfile }: InfoProps) {
  return (
    <>
      <div className="w-40">
        <img src={userProfile.photo} alt="userProfile photo" />
      </div>
      <span className="inline-block mt-4 text-violet_primary">
        <strong>{userProfile.login}</strong>
      </span>
      <a target="_blank" href={`https://github.com/${userProfile.login}`}>
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
  userProfile: User;
}
