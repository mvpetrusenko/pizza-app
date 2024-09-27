import React from 'react';
import '../AboutPage/AboutPage.css'
import Header from '../Header/Header'; 
import NavBar from '../NavBar/NavBar'; 
import Footer from '../Footer/Footer'; 




function AboutPage() {
  return (
    <div className="wrapper"> 
    {<Header />} 
    {<NavBar />}
    
      <div>
          
        <p>О нас</p>
          
      </div>
        
      {<Footer />}
      
    </div>
  );
}

export default AboutPage;