import React from 'react';
import { AxiosResponse } from 'axios';
import { Form, Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import arrayMutators from 'final-form-arrays';

import FormWrapperComponent from '../shared/form-wrapper/form-wrapper.component';
import InputComponent from '../shared/input/input.component';
import mapFormToNewTaskFormat from './utils/map-form-to-new-task-form.util';
import NewTaskHeading from './heading/heading.component';
import FieldArrayComponent from './field-array/field-array.component';
import MarkdownEditorComponent from '../shared/markdown-editor/markdown-editor.component';
import { MarkdownViewComponent } from '../shared/markdown-view/markdown-view.component';

// const required = (value: string) => (value ? undefined : "Required");

export default function NewTaskComponent({ onSubmit }: NewTaskProps) {
  // todo: investigate why values argument doesnt work with NewTaskForm type
  async function onFormSubmit(values: any) {
    if (onSubmit) {
      onSubmit(mapFormToNewTaskFormat(values));
    }
  }

  return (
    <>
      <NewTaskHeading>Kreator zadań</NewTaskHeading>
      <FormWrapperComponent>
        <Form
          onSubmit={onFormSubmit}
          mutators={{
            ...arrayMutators,
          }}
          render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="title"
                label="Tytuł"
                component={InputComponent}
                placeholder="np. Super cool formularz"
              />

              <Field
                name="repo"
                label="Link do zadania na Github"
                component={InputComponent}
                placeholder="https://github.com/kodifaj"
              />

              <Field
                name="tags"
                label="Tagi"
                component={InputComponent}
                placeholder="html, js, css"
              />

              <FieldArray name="tips">
                {({ fields, meta }) => (
                  <FieldArrayComponent
                    fields={fields}
                    meta={meta}
                    recordName="tip"
                    label="Wskazówki"
                    placeholder="Nowa wskazówka"
                  />
                )}
              </FieldArray>

              <FieldArray name="images">
                {({ fields, meta }) => (
                  <FieldArrayComponent
                    fields={fields}
                    meta={meta}
                    recordName="image"
                    label="Obrazy"
                    placeholder="Nowy obraz max 10kb"
                  />
                )}
              </FieldArray>

              <Field
                name="content"
                label="Treść"
                component={MarkdownEditorComponent}
                placeholder="Na czym polega zadanie?"
              />

              <span>Preview</span>
              <div className="bg-white p-2 my-2 h-48 rounded">
                <MarkdownViewComponent source={values.content} />
              </div>

              <span>form state</span>
              <pre>{JSON.stringify(values, null, 2)}</pre>

              <button
                className="bg-gradient-button text-white px-4 py-2 rounded tracking-wide"
                type="submit"
              >
                Wyślij
              </button>
            </form>
          )}
        />
      </FormWrapperComponent>
    </>
  );
}

interface NewTaskProps {
  onSubmit: (task: NewTaskMapped) => Promise<AxiosResponse<NewTaskMapped>>;
}

export interface NewTaskForm {
  content: string;
  images: Image[];
  tips: Tip[];
  title: string;
  tags: string;
}

export interface NewTaskMapped {
  content: string;
  images: string[] | [];
  tips: string[] | [];
  title: string;
  tags: string[] | [];
}

interface Tip {
  tip: string;
}

interface Image {
  image: string;
}
