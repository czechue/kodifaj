/*
MIT License

Copyright (c) 2017-present Michał Miszczyszyn typeofweb.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import React, { MouseEventHandler, ReactElement } from 'react';
import { FieldRenderProps } from 'react-final-form';

export default function MarkdownEditorComponent(
  props: MarkdownEditorProps,
): ReactElement {
  const { input, placeholder, label } = props;
  const textAreaRef = React.createRef<HTMLTextAreaElement>();
  const textAreaClassNames =
    'font-mono appearance-none block w-full h-80 bg-white text-gray-700 rounded-l py-3 px-4 leading-tight border-transparent border focus:outline-none focus:border-violet_primary';

  const actionToTokens: { [action in Actions]: Tokens } = {
    BOLD: { open: '**', close: '**' },
    ITALIC: { open: '_', close: '_' },
    HEADING: { open: '# ', close: '' },
    CODEBLOCK: { open: '```javascript\n', close: '\n```' },
    UL: { open: '* ', close: '' },
    OL: { open: '1. ', close: '' },
  };

  const addTokensToTextarea = (
    el: HTMLTextAreaElement,
    tokens: Tokens,
  ): void => {
    const { selectionStart, selectionEnd, value } = el;
    const startTokenLenths = tokens.open.length;

    let newValue = value;
    newValue =
      newValue.substring(0, selectionEnd) +
      tokens.close +
      newValue.substr(selectionEnd);
    newValue =
      newValue.substring(0, selectionStart) +
      tokens.open +
      newValue.substr(selectionStart);

    el.value = newValue;
    el.setSelectionRange(
      selectionStart + startTokenLenths,
      selectionEnd + startTokenLenths,
    );
  };

  const handleAction = (
    action: Actions,
  ): MouseEventHandler<HTMLButtonElement> => e => {
    e.preventDefault();

    const el = textAreaRef.current;
    if (!el) {
      return;
    }

    const tokens = actionToTokens[action];

    addTokensToTextarea(el, tokens);
    const value = textAreaRef?.current?.value ? textAreaRef.current.value : '';
    input.onChange(value);
  };

  return (
    <div className="mb-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={input.name}
      >
        {label}
      </label>
      <button
        className="px-2 bg-white w-12"
        type="button"
        onClick={handleAction('BOLD')}
        aria-label="wstaw pogrubienie"
        title="wstaw pogrubienie"
      >
        B
      </button>

      <button
        className="px-2 bg-white w-12 ml-2"
        type="button"
        onClick={handleAction('ITALIC')}
        aria-label="wstaw italik"
        title="wstaw italik"
      >
        I
      </button>
      <button
        className="px-2 bg-white w-12 ml-2"
        type="button"
        onClick={handleAction('HEADING')}
        aria-label="wstaw nagłówek"
        title="wstaw nagłówek"
      >
        H
      </button>
      <span className="ml-2">|</span>
      <button
        className="px-2 bg-white w-12 ml-2"
        type="button"
        onClick={handleAction('CODEBLOCK')}
        aria-label="wstaw blok kodu"
        title="wstaw blok kodu"
      >
        code
      </button>
      <button
        className="px-2 bg-white w-12 ml-2"
        type="button"
        onClick={handleAction('UL')}
        aria-label="wstaw listę nieuporządkowaną"
        title="wstaw listę nieuporządkowaną"
      >
        li
      </button>
      <button
        className="px-2 bg-white w-12 ml-2"
        type="button"
        onClick={handleAction('OL')}
        aria-label="wstaw listę uporządkowaną"
        title="wstaw listę uporządkowaną"
      >
        ol
      </button>

      <div className="mt-2 flex items-stretch">
        <textarea
          placeholder={placeholder}
          {...input}
          className={textAreaClassNames}
          ref={textAreaRef}
        />
      </div>
    </div>
  );
}

export interface MarkdownEditorProps
  extends FieldRenderProps<string, HTMLElement> {
  label?: string;
  placeholder?: string;
}

export type Actions = 'BOLD' | 'ITALIC' | 'HEADING' | 'CODEBLOCK' | 'UL' | 'OL';
interface Tokens {
  open: string;
  close: string;
}
