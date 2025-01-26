import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism"; 

interface CodePreviewProps {
  code: string;
  language?: string; // Default to "tsx"
}

export const CodePreview: React.FC<CodePreviewProps> = ({
  code,
  language = "tsx",
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
      <SyntaxHighlighter language={language} style={coy}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
