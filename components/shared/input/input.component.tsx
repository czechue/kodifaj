import React, { ReactElement } from "react";
import { FieldRenderProps } from "react-final-form";

export default function InputComponent(
  props: InputComponentProps
): ReactElement {
  const { input, placeholder, label, fieldType } = props;
  const Component = fieldType ? fieldType : "input";

  return (
    <div>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={input.name}
      >
        {label}
      </label>
      <Component
        placeholder={placeholder}
        {...input}
        className="appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight border-transparent border focus:outline-none focus:border-violet_primary"
      />
    </div>
  );
}

export interface InputComponentProps
  extends FieldRenderProps<string, HTMLElement> {
  label?: string;
  placeholder?: string;
  fieldType?: "textarea" | "input";
}
