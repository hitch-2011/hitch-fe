import React, { FC, Dispatch, SetStateAction } from 'react';

interface MenuProps {
  toggleMenu: () => void;
}

const Menu: FC<MenuProps> = ({ toggleMenu }): JSX.Element => {
  return (
    <div className="menu" onClick={toggleMenu}>
      <div className="menu__bar">

      </div>  
    </div>
  )
};

export default Menu;
