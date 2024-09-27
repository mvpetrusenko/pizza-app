import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'
import logo from '../../assets/images/logo.jpg'; 


function Header() {
  return (
    <header className="sticky">
        <div className="header-content">
          <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link> 
          <div className='header-contact'>
            <span className='contact-item'><b>Приймаємо замовлення: </b></span>
            <span className='contact-item'>ПН-СБ з 9:00 до 21:00</span><br></br>
            <span className='contact-item' style={{color: "green", fontWeight: "bold"}}>+380555555555</span>
          </div>
          
        </div>
      </header> 

  );
}

export default Header;