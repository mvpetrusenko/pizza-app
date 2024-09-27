import React from 'react';
// import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css' 
import { NavLink } from 'react-router-dom';



function NavBar() { 

  return (
    <nav className='header-navbar' id='header-navbar'>
      <ul className='main-menu'>
        <li><NavLink to="/" activeClassName="active">Головна</NavLink></li>
        <li><NavLink to="/menu">Меню</NavLink></li>
        <li><NavLink to="/about">О Super Pizza</NavLink></li>
        <li><NavLink to="/delivery">Доставка і оплата</NavLink></li>
        <li><NavLink to="/contacts">Контакти</NavLink></li>
      </ul>
    </nav> 

  );
}

export default NavBar;


