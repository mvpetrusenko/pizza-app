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
import businessman from '../../assets/images/businessman.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; 
import { motion } from 'framer-motion';


function MainPage() {

  //Element to appear after some time:

  // const [isHide, setIsHide] = useState(true);
  // setTimeout(() => setIsHide(false), 5000); 
  /* {!isHide ? <div>show after 5 seconds</div> : null} */
  

  // element to appear on scroll: 

  // import { motion } from 'framer-motion'; 
  /* 

    <motion.img 
           initial={{opacity: 0, y: 50}} - at the beginning not visible, y - to appear on vertical scroll
           whileInView={{opacity: 1, transition: {delay: 0.2, duration: 0.5}}} - on scroll appears
           viewport={{once: false, amount: 1}} once: false - several times appear if 
                                                we scroll down/up, amount: 1 - appears 100% 
                                                of an element, .5 - 50%
                                                transition to appear not very quick 

  */ 


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

      <motion.div 
        initial={{opacity: 0, y: 50}} 
        whileInView={{opacity: 1, transition: {delay: 0.2, duration: 0.9}}}
        viewport={{once: false, amount: 1}}
        className='social-medias'>
          <div className='media-links'>
            <b>Ми в соц. мережах</b>
              <p><FontAwesomeIcon icon={faFacebook} className="fa-icon" /><a href="https://www.facebook.com/">Facebook Link</a></p>
              <p><FontAwesomeIcon icon={faInstagram} className="fa-icon" /><a href="https://www.instagram.com/">Instagram Link</a></p>
              <p><FontAwesomeIcon icon={faYoutube} className="fa-icon" /><a href="https://www.youtube.com/">YouTube Link</a></p>
            </div>
            <img src={businessman} alt="Businessman" className="businessman" />
      </motion.div>
      
      {<Footer />}
      
    </div>
  );
}

export default MainPage;