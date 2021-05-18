import React, { FC } from 'react';
import Menu from '../Menu/Menu';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

interface HeaderProps {
  toggleMenu: () => void;
  menuIsOpen: boolean;
}

const Header: FC<HeaderProps> = ({ toggleMenu, menuIsOpen }) => {
  return (
    <div className="header-main">
      <h1 className="header-main__title">HITCH</h1>
      <div className="hamburger" onClick={toggleMenu}>
        <HiOutlineMenuAlt2 />
      </div>
      <Menu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
    </div>
  )

}

export default Header;
