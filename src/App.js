import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import CreditCard from './Components/CreditCard';
import CardList from './Components/CardList';
import CenteredButton from './Components/CenteredButton';
import Institutional from './Components/Institutional';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import './App.scss';
import './Components/AccountModal'

import posts from './Data/posts'
import AcconuntModal from './Components/AccountModal';



const App = () => {
  const [ showModal, setShowModal ] = useState(false);
    
  return (
    <div className="App">
      <Navbar handleCreateAcc={() => setShowModal(true)}/>
      <Hero onClick={() => setShowModal(true)}/>
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton onClick={() => setShowModal(true)}>Abra a sua conta</CenteredButton>
      <Institutional onClick={() => setShowModal(true)}/>
      <Faq />    
      <Footer />
      <AcconuntModal show={showModal} handleClose={() => setShowModal(false)}/>
    </div> 
  );    
};


export default App;
