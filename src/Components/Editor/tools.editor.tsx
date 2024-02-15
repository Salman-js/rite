import { ToolConfig } from '@editorjs/editorjs';
import Paragraph from '@editorjs/paragraph';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Link from '@editorjs/link';
import Checklist from '@editorjs/checklist';
import Table from '@editorjs/table';
import Button from 'editorjs-button';
import CodeTool from '@editorjs/code';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';

export const tools: ToolConfig = {
  paragraph: {
    class: Paragraph,
    shortcut: 'CMD+SHIFT+P',
    config: {
      placeholder: 'Text',
    },
  },
  header: {
    class: Header,
    inlineToolbar: true,
    shortcut: 'CMD+SHIFT+H',
    config: {
      placeholder: 'Header',
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 1,
    },
  },
  table: {
    class: Table,
    shortcut: 'CMD+SHIFT+T',
    inlineToolbar: true,
  },
  list: {
    class: List,
    shortcut: 'CMD+SHIFT+L',
    inlineToolbar: true,
  },
  link: {
    class: Link,
    shortcut: 'CMD+SHIFT+U',
    inlineToolbar: true,
    config: {},
  },
  checklist: {
    class: Checklist,
    shortcut: 'CMD+SHIFT+C',
    inlineToolbar: true,
  },
  button: {
    class: Button,
    shortcut: 'CMD+SHIFT+B',
    config: {
      className: 'bg-blue-400',
    },
  },
  code: CodeTool,
  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: 'CMD+SHIFT+Q',
    config: {
      quotePlaceholder: 'Enter a quote',
      captionPlaceholder: "Quote's author",
    },
  },
  Marker: {
    class: Marker,
    inlineToolbar: true,
    shortcut: 'CMD+SHIFT+M',
  },
};
