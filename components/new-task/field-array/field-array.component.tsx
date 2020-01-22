import { Field } from 'react-final-form';
import InputComponent from '../../shared/input/input.component';
import { FieldArrayRenderProps } from 'react-final-form-arrays';
import React from 'react';

export default function FieldArrayComponent({
  recordName,
  label,
  fields,
  placeholder,
}: FieldArrayComponent) {
  return (
    <div className="mb-4">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
      </label>
      {fields.map((name, index) => (
        <div key={name}>
          <Field
            name={`${name}.${recordName}`}
            label=""
            component={InputComponent}
            placeholder={placeholder}
            inputButton={
              <button
                type="button"
                className="h-full pl-1 w-16 max-w-full rounded-r  text-white text-xs font-semibold"
                onClick={() => fields.remove(index)}
              >
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path
                    className="heroicon-ui"
                    d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm11 7a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1z"
                  />
                </svg>
              </button>
            }
          />
        </div>
      ))}
      <button
        title="dodaj wskazówkę"
        type="button"
        onClick={() => fields.push({ [recordName]: '' })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
        >
          <path
            className="heroicon-ui"
            d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm8 6h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z"
          />
        </svg>
      </button>
    </div>
  );
}

interface FieldArrayComponent
  extends FieldArrayRenderProps<{ [key: string]: string }, HTMLInputElement> {
  recordName: string;
  label: string;
  placeholder: string;
}
