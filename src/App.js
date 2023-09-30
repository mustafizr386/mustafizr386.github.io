import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';


import Sidebar from './experiments/Sidebar';
import Banner from './experiments/Banner';
import Portfolio from './experiments/Home';
import AboutMe from './experiments/About Me';
function App() {


    return (
	
        <div className="App">
            <Banner/>
            <Portfolio className="Portfolio" />
            <AboutMe/>
            <Sidebar/>

        </div>
    );
  
}


export default App;
