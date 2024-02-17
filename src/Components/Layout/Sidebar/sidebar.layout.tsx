import { AddNote } from './add.note';
import CmdPaletteContainer from './container.cmd.palette';
import { NotesContainer } from './container.notes';
import SidebarMenu from './menu.sidebar';

const Sidebar = () => {
  return (
    <div className='sidebar-content'>
      <CmdPaletteContainer />
      <div className='h-[50vh] overflow-y-auto border mt-3'>
        <NotesContainer />
      </div>
      <AddNote />
      <SidebarMenu />
    </div>
  );
};

export default Sidebar;
