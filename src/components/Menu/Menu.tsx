import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import userPhoto from '../../assets/images/man.png';

interface MenuProps {
  toggleMenu: () => void;
  menuIsOpen: boolean
}

const Menu: FC<MenuProps> = ({ menuIsOpen, toggleMenu }) => {

  return (
    <div className={menuIsOpen ? 'menu' : 'menu-closed'} onClick={toggleMenu}>
      <div className={menuIsOpen ? 'menu__bar' : 'menu__bar-closed'}>
        <div className="menu__bar__profile">  
          <div className="menu__bar__profile__container">
            <img 
              className="menu__bar__profile__img"
              src={userPhoto} 
              alt="Your profile"
            />
          </div>
          <p className="menu__bar__profile__name">Name</p>
          <Link data-cy='profile-button' to="/profile" className="profile-link link">
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
