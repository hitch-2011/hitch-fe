import React, { FC } from 'react';
import Menu from '../Menu/Menu';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

interface HeaderProps {
  toggleMenu: () => void;
  menuIsOpen: boolean;
  isLoggedIn: boolean
}

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY.toString();
}

const Header: FC<HeaderProps> = ({ toggleMenu, menuIsOpen, isLoggedIn }) => {
  return (
    <header className={isLoggedIn ? "header-main--small" : "header-main"}>
      <h1 className={isLoggedIn ? "header--small" :"header-main__title"}>HITCH</h1>
      {isLoggedIn &&
        <div className="hamburger" onClick={toggleMenu}>
          <HiOutlineMenuAlt2 />
        </div>
      }
      <Menu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
    </header>
  )

}

export default Header;
