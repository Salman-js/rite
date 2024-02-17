import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { NoteItem } from './item.note';
import { INote } from '@/Interface/Note/note.interface';
import { PlusOutlined } from '@ant-design/icons';

export function NotesContainer() {
  const [items, setItems] = useState<INote[]>([
    { id: 1, order: 1 },
    { id: 2, order: 2 },
    { id: 3, order: 3 },
    { id: 4, order: 4 },
    { id: 5, order: 5 },
    { id: 6, order: 6 },
    { id: 7, order: 7 },
    { id: 8, order: 8 },
  ]);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      // Require the mouse to move by 10 pixels before activating
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      // Press delay of 250ms, with tolerance of 5px of movement
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className='w-full'>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map((item) => item.order)}
          strategy={verticalListSortingStrategy}
        >
          {items.map((item) => (
            <NoteItem key={item.order} note={item} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        const activeIndex = newItems.findIndex(
          (item) => item.order === active.id
        );
        const overIndex = newItems.findIndex((item) => item.order === over?.id);

        if (activeIndex !== -1 && overIndex !== -1) {
          const [removed] = newItems.splice(activeIndex, 1);
          newItems.splice(overIndex, 0, removed);
        }

        return newItems;
      });
    }
  }
}
