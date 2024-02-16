import { UniqueIdentifier } from '@dnd-kit/core';
import { OutputData } from '@editorjs/editorjs';

export interface INote extends INewNote {
  id: UniqueIdentifier;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface INewNote {
  title?: string;
  content?: OutputData;
}
