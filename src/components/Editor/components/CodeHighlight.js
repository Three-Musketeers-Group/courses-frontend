import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const CodeHighlight = ({ children }) => (
  <SyntaxHighlighter language="javascript" style={github}>
    {children}
  </SyntaxHighlighter>
);

CodeHighlight.propTypes = {
  children: PropTypes.node.isRequired,
};
