import { Field } from "react-final-form";
import InputComponent from "../../shared/input/input.component";
import { FieldArrayRenderProps } from "react-final-form-arrays";
import React from "react";

export default function TipsComponent({
  fields
}: FieldArrayRenderProps<{ tip: string }, HTMLInputElement>) {
  return (
    <div className="mb-4">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Wskazówki
      </label>
      {fields.map((name, index) => (
        <div key={name}>
          <Field
            name={`${name}.tip`}
            label=""
            component={InputComponent}
            placeholder="Nowa wskazówka"
            inputButton={
              <button
                type="button"
                className="h-full w-16 max-w-full rounded-r bg-gradient-button text-white text-xs font-semibold"
                onClick={() => fields.remove(index)}
              >
                Usuń
              </button>
            }
          />
        </div>
      ))}
      <button
        className="mt-1 h-8 px-2 rounded bg-gradient-button text-white text-white text-xs font-semibold"
        type="button"
        onClick={() => fields.push({ tip: "" })}
      >
        Dodaj
      </button>
    </div>
  );
}
