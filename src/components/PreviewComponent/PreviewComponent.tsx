import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Button } from 'react-ui';
import CopyIcon from '../../../public/assets/icon/CopyIcon';

export interface livecodeEditorProsp {
  code: string;
  scope?: Record<string, unknown>;
}

const customTheme = {
  plain: {
    color: "#f8f8f2",
    backgroundColor: "#282a36",
    fontSize: "0.972vw",
  },
  styles: [
    {
      types: ["keyword"],
      style: { color: "#ff79c6", fontWeight: "bold" as const },
    },
    {
      types: ["string", "char", "inserted"],
      style: { color: "#50fa7b", fontStyle: "italic" as const },
    },
    {
      types: ["comment"],
      style: { color: "#6272a4", fontStyle: "italic" as const },
    },
    {
      types: ["variable"],
      style: { color: "#f8f8f2" },
    },
    {
      types: ["function"],
      style: { color: "#8be9fd" },
    },
    {
      types: ["operator"],
      style: { color: "#ff79c6" },
    },
    {
      types: ["punctuation"],
      style: { color: "#f8f8f2" },
    },
    {
      types: ["class-name"],
      style: { color: "#f1fa8c", fontWeight: "bold" as const },
    },
    {
      types: ["constant"],
      style: { color: "#bd93f9" },
    },
    {
      types: ["boolean", "number"],
      style: { color: "#ffb86c" },
    },
    {
      types: ["tag"],
      style: { color: "#ff79c6", fontWeight: "bold" as const },
    },
    {
      types: ["attr-name"],
      style: { color: "#a9fef7", fontStyle: "italic" as const },
    },
    {
      types: ["attr-value"],
      style: { color: "#f1fa8c" },
    },
  ],
};


const PreviewEditor = ({ ...props }: livecodeEditorProsp) => {
  const [copied, setCopied] = useState(false);

  //for handeling the copy function
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };
  return (
    <div className='bg-slate-800 space-y-4'>
      <LiveProvider code={props.code} scope={props.scope}>
        <div className="space-y-1">
          <div className=' gap-1 px-2.5 py-5 flex items-center justify-center flex-wrap'>
            <LivePreview />
          </div>
          <LiveEditor theme={customTheme} className='border border-slate-200 border-solid border-r-0 border-l-0' />
          <LiveError />
        </div>
      </LiveProvider>
      <div className='flex justify-end items-center space-x-4 pb-4 px-2.5 '>

        <Button
          size="md" variant="ghost"
          onClick={handleCopy}
          className="min-w-[auto] w-14 h-14 justify-center items-center bg-white rounded-full "
        >
          {copied ?
            <span className="text-green-300">Copied!</span>
            :
            <span> <CopyIcon /></span>
          }
        </Button>
      </div>
    </div>
  );
};

export default PreviewEditor;
