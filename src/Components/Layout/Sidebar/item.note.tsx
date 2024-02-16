import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FileText } from 'lucide-react';
import { INote } from '@/Interface/Note/note.interface';

type noteItemProps = {
  note: INote;
};

export const NoteItem: React.FC<noteItemProps> = ({ note }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: note.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className='note-item'
    >
      <div className='flex flex-row justify-start items-center'>
        <FileText /> <span className='ml-2'>Note #{note.id}</span>
      </div>
    </div>
  );
};
