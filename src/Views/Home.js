import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Hero from '../Components/Hero';
import CreditCard from '../Components/CreditCard';
import CardList from '../Components/CardList';
import CenteredButton from '../Components/CenteredButton';
import Institutional from '../Components/Institutional';
import Faq from '../Components/Faq';

import posts from '../Data/posts'




const Home = ({ handleClick }) => (
   <>
      <Hero onClick={() => setShowModal(true)}/>
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton onClick={handleClick}>Abra a sua conta</CenteredButton>
      <Institutional />
      <Faq />    
    </> 
);    



export default Home;
