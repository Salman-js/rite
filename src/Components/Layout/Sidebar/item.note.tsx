import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Copy, FileText, Trash2 } from 'lucide-react';
import { INote } from '@/Interface/Note/note.interface';
import { Button, Dropdown, MenuProps } from 'antd';
import {
  EllipsisOutlined,
  ExportOutlined,
  FormOutlined,
  LinkOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { BsLayoutSidebarInsetReverse } from 'react-icons/bs';
import toast from 'react-hot-toast';

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
  const items: MenuProps['items'] = [
    {
      key: '0',
      label: 'Add to Favorites',
      icon: (
        <StarOutlined
          style={{
            fontSize: 18,
          }}
        />
      ),
    },
    {
      type: 'divider',
    },
    {
      key: '1',
      label: 'Copy link',
      icon: (
        <LinkOutlined
          style={{
            fontSize: 18,
          }}
        />
      ),
    },
    {
      key: '2',
      label: 'Duplicate',
      icon: <Copy size={18} />,
    },
    {
      key: '3',
      label: 'Rename',
      icon: (
        <FormOutlined
          style={{
            fontSize: 18,
          }}
        />
      ),
    },
    {
      key: 'x',
      label: 'Delete',
      onClick: () => {
        toast(
          () => (
            <span className='bg-black text-white'>
              Moved to trash
              <button className='text-white ml-4 hover:text-white bg-none border-none font-semibold'>
                Undo
              </button>
            </span>
          ),
          {
            position: 'bottom-center',
            style: {
              backgroundColor: 'black',
              color: 'white',
            },
          }
        );
      },
      icon: <Trash2 size={18} />,
    },
    {
      type: 'divider',
    },
    {
      key: '4',
      label: 'Open in new tab',
      icon: (
        <ExportOutlined
          style={{
            fontSize: 18,
          }}
        />
      ),
    },
    {
      key: '5',
      label: 'Open in side peek',
      icon: <BsLayoutSidebarInsetReverse size={18} />,
    },
  ];
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className='note-item'
    >
      <div className='flex flex-row justify-between items-center w-full'>
        <div className='flex flex-row justify-start items-center text-gray-500'>
          <FileText /> <span className='ml-2'>Note #{note.id}</span>
        </div>
        <Dropdown
          menu={{ items }}
          placement='bottomLeft'
          trigger={['click']}
          autoAdjustOverflow
          overlayClassName=''
        >
          <Button
            type='text'
            icon={<EllipsisOutlined />}
            size='small'
            shape='circle'
          />
        </Dropdown>
      </div>
    </div>
  );
};
