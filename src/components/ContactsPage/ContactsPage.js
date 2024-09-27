import React from 'react';
import '../ContactsPage/ContactsPage.css'
import Header from '../Header/Header'; 
import NavBar from '../NavBar/NavBar'; 
import Footer from '../Footer/Footer'; 




function ContactsPage() {
  return (
    <div className="wrapper"> 
    {<Header />} 
    {<NavBar />}
    
      <div>
          
        <p>Контакти</p>
      
          
      </div>
        
      {<Footer />}
      
    </div>
  );
}

export default ContactsPage;