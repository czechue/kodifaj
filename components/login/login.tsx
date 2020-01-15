import React from 'react';

export default function LoginComponent() {
  return (
    <div>
      <div className="container flex">
        <div className="sm:w-1/2 flex flex-col justify-between w-full bg-purple-100">
          <div className="flex-1 pb-5 sm:pb-0 text-xl text-purple-600 text-center font-bold">
            <p className="pt-5">Logowanie</p>
          </div>
          <a
            href="/auth/github"
            className="flex self-center mb-10 sm:mb-0 px-5 py-2 bg-gray-1000 font-medium text-white rounded"
          >
            <img
              src="/static/images/github-icon-white.svg"
              className="px-2 "
              alt="github icon"
            />
            Zaloguj się przez GitHub
          </a>
          <div className="flex flex-1 items-center justify-end pb-12 sm:pb-0">
            <span className="pr-5 text-purple-900">
              wróć do poprzedniej
              <a className="text-indigo-800 font-bold" href="#">
                strony
              </a>
            </span>
          </div>
        </div>

        <div className="sm:w-1/2 sm:block relative hidden">
          <h2
            className="absolute text-5xl text-white"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            Kodifaj
          </h2>
          <img
            src="/static/images/bg-login.png"
            alt="object"
            className=" w-full"
            style={{}}
          />
        </div>
      </div>
    </div>
  );
}
