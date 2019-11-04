import React from "react";
import HeadingComponent from "../heading/heading.component";
import { User } from "../../providers/user.provider";
import FormWrapperComponent from "../form-wrapper/form-wrapper.component";

const Heading = ({ children }: { children: string }) => (
  <HeadingComponent
    CustomTag="h2"
    orientation="left"
    size="2xl"
    font="thin"
    tracking="wide"
  >
    {children}
  </HeadingComponent>
);

export default function NewTaskComponent({ user }: Props) {
  const login = user.login;

  function handleOnSubmit() {
    console.log("here", login);
  }

  return (
    <>
      <button onClick={() => handleOnSubmit()}>Aa</button>
      <Heading>Kreator zadań</Heading>
      <FormWrapperComponent>
        <div>Hello</div>
      </FormWrapperComponent>
    </>
  );
}

interface Props {
  user: User;
}
