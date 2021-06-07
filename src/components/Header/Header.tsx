import React, { FC } from 'react';
import Menu from '../Menu/Menu';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

interface HeaderProps {
  toggleMenu: () => void;
  menuIsOpen: boolean;
  isLoggedIn: boolean
  name: string;
}

const Header: FC<HeaderProps> = ({ toggleMenu, menuIsOpen, isLoggedIn, name }) => {
  return (
    <header className={isLoggedIn ? "header-main--small" : "header-main"}>
      <h1 data-cy='hitch-header-title' className={isLoggedIn ? "header--small" :"header-main__title"}>HITCH</h1>
      {isLoggedIn &&
        <div data-cy='menu' className="hamburger" onClick={toggleMenu}>
          <HiOutlineMenuAlt2 />
        </div>
      }
      <Menu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} name={name}/>
    </header>
  )

}

export default Header;
