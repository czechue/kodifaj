import React, { ReactElement } from 'react';
import { Form, Field } from 'react-final-form';
import InputComponent from '../../../shared/input/input.component';

export default function SolutionFormComponent({
  onSubmit,
}: SolutionFormProps): ReactElement {
  return (
    <div className="bg-pink_bg w-full rounded p-4">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="repo"
              label="Link do repo"
              component={InputComponent}
              placeholder="https://github.com/czechue/zadanie1"
            />
            <Field
              name="demo"
              label="Link do wersji live"
              component={InputComponent}
              placeholder="https://zadanie1.github.io"
            />
            <Field
              name="comment"
              label="Twój komentarz"
              component={InputComponent}
              placeholder="Moje wrażenia"
              fieldType="textarea"
            />
            <div className="w-full flex justify-end mt-5">
              <button
                type="submit"
                className="px-8 py-2 bg-gradient-button text-white rounded hover:opacity-75"
              >
                WYŚLIJ
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
}

interface SolutionFormProps {
  onSubmit: (value: any) => void;
}
