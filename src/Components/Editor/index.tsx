import React from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import { tools } from './tools.editor';
import Undo from 'editorjs-undo';

type editorProps = {
  data?: OutputData;
};

const Editor: React.FC<editorProps> = ({ data: initData }) => {
  const editor = new EditorJS({
    holder: 'editorjs-container',
    inlineToolbar: [
      'text',
      'header',
      'list',
      'link',
      'checklist',
      'button',
      'code',
      'quote',
    ],
    tools,
    onReady: () => {
      const undo = new Undo({
        editor,
        config: {
          shortcuts: {
            undo: 'CMD+Z',
            redo: 'CMD+SHIFT+Z',
          },
        },
      });
      undo.initialize();
    },
    autofocus: true,
    placeholder: 'Let`s write an awesome story!',
    style: {
      nonce: 'black',
    },
  });
  return <div id='editorjs-container'></div>;
};

export default Editor;
