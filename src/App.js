import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import CreditCard from './Components/CreditCard';
import CardList from './Components/CardList';
import CenteredButton from './Components/CenteredButton';
import Institutional from './Components/Institutional';
import Faq from './Components/Faq';
import './App.scss';

import posts from './Data/posts'



const App = () => (
   <div className="App">
      <Navbar />
      <Hero />
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton>Abra a sua conta</CenteredButton>
      <Institutional />
      <Faq />    
      
    </div>
  );


export default App;
