import React from "react";
import {AxiosResponse} from "axios";
import { Form, Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import arrayMutators from "final-form-arrays";

import HeadingComponent from "../heading/heading.component";
import FormWrapperComponent from "../form-wrapper/form-wrapper.component";
import InputComponent from "../shared/input/input.component";
import TipsComponent from "./tips/tips.component";

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

// const required = (value: string) => (value ? undefined : "Required");

export default function NewTaskComponent({ onSubmit }: NewTaskProps) {

  async function onFormSubmit(values: any) {
    if (onSubmit) {
      onSubmit(mapFormToNewTaskFormat(values));
    }
  }

  return (
    <>
      <Heading>Kreator zadań</Heading>
      <FormWrapperComponent>
        <Form
          onSubmit={onFormSubmit}
          mutators={{
            ...arrayMutators
          }}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="title"
                label="Tytuł"
                component={InputComponent}
                placeholder="np. Super cool formularz"
              />

              <Field
                name="content"
                label="Treść"
                component={InputComponent}
                placeholder="Na czym polega zadanie?"
                fieldType="textarea"
              />

              <FieldArray name="tips">
                {({ fields, meta }) => (
                  <TipsComponent fields={fields} meta={meta}/>
                )}
              </FieldArray>

              <Field
                label="Zdjęcia"
                name="images"
                component={InputComponent}
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

function mapFormToNewTaskFormat(task: NewTaskForm): NewTaskMapped {
  return {
    ...task,
    tips: task.tips.length > 1 ? task.tips.map(tip => tip.tip) : []
  };
}

export interface NewTaskMapped {
  content: string;
  images: string;
  tips: string[] | [];
  title: string;
}

interface NewTaskProps {
  onSubmit: (task: NewTaskMapped) => Promise<AxiosResponse<NewTaskMapped>>;
}

export interface NewTaskForm {
  content: string;
  images: string;
  tips: Tip[];
  title: string;
}

interface Tip {
  tip: string;
}
