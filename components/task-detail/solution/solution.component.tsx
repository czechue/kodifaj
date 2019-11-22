import React from "react";
import { Form, Field } from "react-final-form";
import InputComponent from "../../shared/input/input.component";

export default function SolutionComponent() {
  function onSubmit() {
    console.log("lol");
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="repo-link"
            label="Link do repo"
            component={InputComponent}
            placeholder="https://github.com/czechue/zadanie1"
          />
          <Field
            name="demo-link"
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
  );
}
