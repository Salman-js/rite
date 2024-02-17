import { Trash2 } from 'lucide-react';
import React from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';

const SidebarMenu: React.FC = () => {
  return (
    <div className='w-full'>
      <div className='note-item cursor-pointer'>
        <div className='flex flex-row justify-between items-center w-full'>
          <div className='flex flex-row justify-start items-center text-gray-500'>
            <IoCalendarNumberOutline size={22} />{' '}
            <span className='ml-2'>Calendar</span>
          </div>
        </div>
      </div>
      <div className='note-item cursor-pointer'>
        <div className='flex flex-row justify-between items-center w-full'>
          <div className='flex flex-row justify-start items-center text-gray-500'>
            <Trash2 size={22} /> <span className='ml-2'>Trash</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SidebarMenu;
