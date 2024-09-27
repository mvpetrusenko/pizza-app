import React from 'react';
import '../DeliveryPage/DeliveryPage.css'
import Header from '../Header/Header'; 
import NavBar from '../NavBar/NavBar'; 
import Footer from '../Footer/Footer'; 




function DeliveryPage() {
  return (
    <div className="wrapper"> 
    {<Header />} 
    {<NavBar />}
    
      <div>
          
        <p>Доставка і оплата</p>
          
      </div>
        
      {<Footer />}
      
    </div>
  );
}

export default DeliveryPage;