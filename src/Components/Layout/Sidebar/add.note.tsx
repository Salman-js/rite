import { PlusOutlined } from '@ant-design/icons';

export function AddNote() {
  return (
    <div className='note-item cursor-pointer'>
      <div className='flex flex-row justify-start items-center text-gray-500'>
        <PlusOutlined /> <span className='ml-2'>Add a note</span>
      </div>
    </div>
  );
}
