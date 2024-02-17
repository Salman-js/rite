import React, { useEffect, useState } from 'react';
import CmdPalette from './cmd.palette';
import { SearchOutlined } from '@ant-design/icons';

const CmdPaletteContainer: React.FC = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        (navigator?.platform?.toLowerCase().includes('mac')
          ? e.metaKey
          : e.ctrlKey) &&
        e.key === 'k'
      ) {
        e.preventDefault();
        e.stopPropagation();

        setOpen((currentValue) => {
          return !currentValue;
        });
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <>
      <div
        className='w-11/12 py-[0.4em] mt-1 flex flex-row justify-between text-gray-600 hover:bg-slate-50 bg-white px-6 cursor-pointer rounded-full border border-slate-200 mx-2'
        onClick={() => setOpen(true)}
      >
        <div className='flex flex-row justify-between items-center w-full'>
          <div className='flex flex-row justify-start items-center text-gray-500'>
            <SearchOutlined /> <span className='ml-2'>Search</span>
          </div>
          <div className='flex flex-row'>
            <span className='bg-gray-200 text-gray-700 font-bold px-2 py-1 rounded shadow-sm inline-flex items-center text-xs'>
              Ctrl
            </span>{' '}
            <span className='mx-1 my-auto'>+</span>
            <span className='bg-gray-200 text-gray-700 font-bold px-2 py-1 rounded shadow-sm inline-flex items-center text-xs'>
              K
            </span>
          </div>
        </div>
      </div>
      <CmdPalette open={open} setOpen={setOpen} />
    </>
  );
};
export default CmdPaletteContainer;
