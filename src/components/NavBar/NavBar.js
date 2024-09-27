import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css'



function NavBar() {
  return (
    <nav className='header-navbar'>
      <ul className='main-menu'>
        <li><Link to="/">Головна</Link></li>
        <li><Link to="/menu">Меню</Link></li>
        <li><Link to="/about">О Super Pizza</Link></li>
        <li><Link to="/delivery">Доставка і оплата</Link></li>
        <li><Link to="/contacts">Контакти</Link></li>
      </ul>
    </nav> 

  );
}

export default NavBar;


