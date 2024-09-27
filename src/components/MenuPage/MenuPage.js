import React from 'react';
import '../MenuPage/MenuPage.css'
import Header from '../Header/Header'; 
import NavBar from '../NavBar/NavBar'; 
import Footer from '../Footer/Footer'; 




function MenuPage() {
  return (
    <div className="wrapper"> 
    {<Header />} 
    {<NavBar />}
    
      <div>
          
        <p>Наше меню</p>
          
      </div>
        
      {<Footer />}
      
    </div>
  );
}

export default MenuPage;