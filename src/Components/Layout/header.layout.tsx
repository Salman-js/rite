const Header = () => {
  return (
    <div className='main-header'>
      <div className='dark:block hidden'>
        {/* <img src='/Images/white-logo.png' alt='' className='w-6' /> */}
      </div>
      <div className='dark:hidden block'>
        {/* <img src='/Images/black-logo.png' alt='' className='w-6' /> */}
        <p className='logo'>Logo</p>
      </div>
      <div className='flex flex-row space-x-3'></div>
    </div>
  );
};

export default Header;
