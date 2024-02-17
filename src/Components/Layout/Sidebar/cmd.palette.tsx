import 'react-cmdk/dist/cmdk.css';
import CommandPalette, { filterItems, getItemIndex } from 'react-cmdk';
import React, { useState } from 'react';
type cmdPaletteProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CmdPalette: React.FC<cmdPaletteProps> = ({ open, setOpen }) => {
  const [page, setPage] = useState<'root' | 'projects'>('root');
  const [search, setSearch] = useState('');

  const filteredItems = filterItems(
    [
      {
        heading: 'Home',
        id: 'home',
        items: [
          {
            id: 'home',
            children: 'Home',
            icon: 'HomeIcon',
            href: '#',
          },
          {
            id: 'settings',
            children: 'Settings',
            icon: 'CogIcon',
            href: '#',
          },
          {
            id: 'projects',
            children: 'Projects',
            icon: 'RectangleStackIcon',
            closeOnSelect: false,
            onClick: () => {
              setPage('projects');
            },
          },
        ],
      },
      {
        heading: 'Other',
        id: 'advanced',
        items: [
          {
            id: 'developer-settings',
            children: 'Developer settings',
            icon: 'CodeBracketIcon',
            href: '#',
          },
          {
            id: 'privacy-policy',
            children: 'Privacy policy',
            icon: 'LifebuoyIcon',
            href: '#',
          },
          {
            id: 'log-out',
            children: 'Log out',
            icon: 'ArrowRightOnRectangleIcon',
            onClick: () => {
              alert('Logging out...');
            },
          },
        ],
      },
    ],
    search
  );

  return (
    <div className='bg-white'>
      <CommandPalette
        onChangeSearch={setSearch}
        onChangeOpen={(isOpen) => setOpen(isOpen)}
        search={search}
        isOpen={open}
        page={page}
      >
        <CommandPalette.Page id='root'>
          {filteredItems.length ? (
            filteredItems.map((list) => (
              <CommandPalette.List key={list.id} heading={list.heading}>
                {list.items.map(({ id, ...rest }) => (
                  <CommandPalette.ListItem
                    key={id}
                    index={getItemIndex(filteredItems, id)}
                    {...rest}
                  />
                ))}
              </CommandPalette.List>
            ))
          ) : (
            <CommandPalette.FreeSearchAction />
          )}
        </CommandPalette.Page>

        <CommandPalette.Page id='projects'>null</CommandPalette.Page>
      </CommandPalette>
    </div>
  );
};

export default CmdPalette;
