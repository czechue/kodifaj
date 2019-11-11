import React, { ReactElement } from "react";
import { FieldRenderProps } from "react-final-form";
import clsx from "clsx";

export default function InputComponent(
  props: InputComponentProps
): ReactElement {
  const { input, placeholder, label, fieldType, inputButton = null } = props;
  const Component = fieldType ? fieldType : "input";

  const inputClassNames = clsx(
    "appearance-none block w-full bg-white text-gray-700 rounded-l py-3 px-4 leading-tight border-transparent border focus:outline-none focus:border-violet_primary",
    {
      "rounded-r": !inputButton
    }
  );

  return (
    <div className="mb-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={input.name}
      >
        {label}
      </label>
      <div className="flex items-stretch">
        <Component
          placeholder={placeholder}
          {...input}
          className={inputClassNames}
        />
        {inputButton ? <div className="w-10">{inputButton}</div> : null}
      </div>
    </div>
  );
}

export interface InputComponentProps
  extends FieldRenderProps<string, HTMLElement> {
  label?: string;
  placeholder?: string;
  fieldType?: "textarea" | "input";
  inputButton?: ReactElement;
}
