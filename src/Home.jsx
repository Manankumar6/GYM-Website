// src/components/Home.js

import React from 'react';
import './App.css'; // Import the CSS file for styling
import Common from './Common';


const Home = () => {
  return (
    <>
    <div className='home_container '>
      <h1>GYM</h1>
          <p>Keep Your Body Fit & <strong>Strong</strong> <br />with  [Fitness Club Name] </p>
        <button className='btn'>More About Health </button>
    </div>
    
      <Common 
      heading='BECOME YOUR STRONGEST SELF'
      shot_heading = "EXCERCISE SMARTER, FEEL BETTER, LIVE LONGER."
      para="Hi, my name is Steven and I am a Health & GYM Professional. My training programs will enable you to lose those unwanted pounds, gain muscle tone, and improve your overall health and appearance. You will be completely revitalized by my program!"
      
      btn_name= "Let's Train Now "      
      />

    </>
  )
};

export default Home;
