import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import CreditCard from './Components/CreditCard';
import "./App.scss";

const App = () => (
   <div className="App">
      <Navbar />
      <Hero />
      <CreditCard />
    </div>
  );


export default App;
