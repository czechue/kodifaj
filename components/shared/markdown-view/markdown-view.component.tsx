import ReactMarkdown from 'react-markdown';
import CodeBlock from '../code-block/code-block.component';
import React from 'react';

export function MarkdownViewComponent({ source }: MarkdownViewProps) {
  return (
    <div className="markdown-view">
      <ReactMarkdown
        renderers={{
          code: CodeBlock,
        }}
        source={source}
      />
    </div>
  );
}

interface MarkdownViewProps {
  source: string;
}
