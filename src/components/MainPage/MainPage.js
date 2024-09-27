import React from 'react';
import { Link } from 'react-router-dom';
import '../MainPage/MainPage.css'
import Header from '../Header/Header'; 
import NavBar from '../NavBar/NavBar'; 
import Footer from '../Footer/Footer'; 
import pizza1 from '../../assets/images/pizza1.png'; 
import pizza2 from '../../assets/images/pizza2.png'; 
import pizza3 from '../../assets/images/pizza3.png'; 
import pizza4 from '../../assets/images/pizza4.png'; 
import pizza5 from '../../assets/images/pizza5.png'; 
import pizza6 from '../../assets/images/pizza6.png'; 



function MainPage() {
  return (
    <div className="wrapper"> 
    {<Header />} 
    {<NavBar />}
    
      <div className='product-items'>
          
        <div className="itemBlock">
        <Link to="/"><img src={pizza1} alt="Pizza 1" className="item" /></Link>
        <p>Pizza 1 (200 г)</p>
        <div className='product-description'>
          Філе куряче, шинка, пепероні, сир Моцарела
        </div>
        </div> 


        <div className="itemBlock">
        <Link to="/"><img src={pizza2} alt="Pizza 2" className="item" /></Link>
        <p>Pizza 2</p>
        <div className='product-description'>
          Мисливські ковбаски, перець, помідори, гриби
        </div>
        </div>

        <div className="itemBlock">
        <Link to="/"><img src={pizza3} alt="Pizza 3" className="item" /></Link>
        <p>Pizza 3</p>
        <div className='product-description'>
          Шинка, сир Пармезан, печериці, томати чері
        </div> 
        </div>

        <div className="itemBlock">
        <Link to="/"><img src={pizza4} alt="Pizza 2" className="item" /></Link>
        <p>Pizza 4</p>
        <div className='product-description'>
          М'ясо мідій, кальмар, орегано, томати
        </div>
        </div> 

        <div className="itemBlock">
        <Link to="/"><img src={pizza5} alt="Pizza 2" className="item" /></Link>
        <p>Pizza 5</p>
        <div className='product-description'>
          Сир дор блю, сир чеддер, сир Пармезан, сир Моцарела, груша
        </div>
        </div>

        <div className="itemBlock">
        <Link to="/"><img src={pizza6} alt="Pizza 2" className="item" /></Link>
        <p>Pizza 6</p>
        <div className='product-description'>
          Мисливські ковбаски, шинка, пепероні, орегано, томати
        </div>
        </div>
          
      </div>
        
      {<Footer />}
      
    </div>
  );
}

export default MainPage;