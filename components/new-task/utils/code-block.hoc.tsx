import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default class CodeBlock extends React.PureComponent<{
  value: string;
  language?: string;
}> {
  render() {
    const { language = 'javascript', value = '' } = this.props;

    return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
  }
}
