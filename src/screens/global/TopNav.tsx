import React from 'react';
import { Navbar, Swap } from 'react-daisyui';
import { useGlobalState } from '../../contexts/StateContext';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';

const TopNav = () => {
  const {
    state: { theme, workingFile },
    actions: { setTheme }
  } = useGlobalState();

  const toggleTheme = () => {
    return theme === 'dracula' ? 'pastel' : 'dracula';
  };
  return (
    <Navbar className="bg-base-300">
      <Navbar.Start />
      <Navbar.Center>
        <h1>Budget After Effects {workingFile && `- ${workingFile.name}`}</h1>
      </Navbar.Center>
      <Navbar.End>
        <Swap onClick={() => setTheme(toggleTheme)} onElement={<IoSunnySharp />} offElement={<IoMoonSharp />} rotate />
      </Navbar.End>
    </Navbar>
  );
};

export default TopNav;
