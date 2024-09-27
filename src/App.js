import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage'; 
import MenuPage from './components/MenuPage/MenuPage'; 
import AboutPage from './components/AboutPage/AboutPage'; 
import DeliveryPage from './components/DeliveryPage/DeliveryPage'; 
import ContactsPage from './components/ContactsPage/ContactsPage'; 
import './App.css';  // Ensure you import global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MainPage />} /> 
          <Route exact path="/menu" element={<MenuPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/delivery" element={<DeliveryPage />} />
          <Route exact path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;