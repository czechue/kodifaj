import React from "react";
import { Form, Field } from "react-final-form";
import HeadingComponent from "../heading/heading.component";
import FormWrapperComponent from "../form-wrapper/form-wrapper.component";
import InputComponent from "../shared/input/input.component";

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

const required = (value: string) => (value ? undefined : "Required");

export default function NewTaskComponent({ onSubmit }: NewTaskProps) {
  function handleOnSubmit(x: NewTask) {
    if (onSubmit) {
      onSubmit(x);
    }
  }

  return (
    <>
      <Heading>Kreator zadań</Heading>
      <FormWrapperComponent>
        <Form
          onSubmit={handleOnSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                label="Tytuł"
                name="title"
                component={InputComponent}
                validate={required}
                placeholder="np. Super cool formularz"
              />

              <Field
                label="Treść"
                name="content"
                component={InputComponent}
                validate={required}
                placeholder="Na czym polega zadanie?"
                fieldType="textarea"
              />

              <Field
                label="Wskazówki"
                name="tips"
                component={InputComponent}
                validate={required}
                placeholder="Daj przydatną wskazówkę"
              />

              <Field
                label="Zdjęcia"
                name="images"
                component={InputComponent}
                validate={required}
                placeholder="Zdjęcie max 10kb"
              />

              <button type="submit">Submit</button>
            </form>
          )}
        />
      </FormWrapperComponent>
    </>
  );
}

interface NewTaskProps {
  onSubmit?: (task: NewTask) => void;
}

export interface NewTask {
  content: string;
  images: string;
  tips: string;
  title: string;
}
