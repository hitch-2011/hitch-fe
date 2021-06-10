import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import userPhoto from '../../assets/images/user-4.png';

interface MenuProps {
  toggleMenu: () => void;
  menuIsOpen: boolean;
  name: string;
}

const Menu: FC<MenuProps> = ({ menuIsOpen, toggleMenu, name }) => {

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
          <p className="menu__bar__profile__name">{!name ? 'Billy' : name}</p>
          <Link data-cy='profile-button' to="/profile" className="profile-link link">
            <p>View Profile</p>
          </Link>
        </div>
        <div className="menu__bar__links">
          <Link to="/matched-routes" className="menu-link link">
            <p>Matched Routes</p>
          </Link>
          <Link to="/requests" className="menu-link link">
            <p>Requests</p>
          </Link>
        </div>
      </div>  
    </div>
  )
};

export default Menu;
