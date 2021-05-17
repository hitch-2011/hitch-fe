import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface MenuProps {
  toggleMenu: () => void;
  menuOpen: boolean
}

const Menu: FC<MenuProps> = ({ menuOpen, toggleMenu }) => {

  return (
    <div className={menuOpen ? 'menu' : 'menu-closed'} onClick={toggleMenu}>
      <div className={menuOpen ? 'menu__bar' : 'menu__bar-closed'}>
        <div className="menu__bar__profile">  
          <div className="menu__bar__profile__img">
            {/* //an image will go here */}
          </div>
          <p className="menu__bar__profile__name">Name</p>
          <Link to="/profile" className="profile-link link">
            <p>View Profile</p>
          </Link>
        </div>
        <div className="menu__bar__links">
          <Link to="/requests" className="menu-link link">
            <p>Requests</p>
          </Link>
          <Link to="/matched-routes" className="menu-link link">
            <p>Matched Routes</p>
          </Link>
          <Link to="/pending-routes" className="menu-link link">
            <p>Pending Routes</p>
          </Link>
          <Link to="/messages" className="menu-link link">
            <p>Messages</p>
          </Link>
        </div>
      </div>  
    </div>
  )
};

export default Menu;
