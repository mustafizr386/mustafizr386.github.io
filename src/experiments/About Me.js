import React, { useState, createElement } from 'react';
import { useSpring, animated } from 'react-spring';
import ReactDOM from "react-dom";
import './Pages.css';
import TypingEffect from './effects/TypingEffect';

const Portfolio = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
  

    
    const handleClick = (event) => {
        if (event.target.id == "About Me"  ) {
           
            setIsHidden(false);
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            
        }
        else if (event.target.id  ) {
      
            setIsVisible(false);
            const timer = setTimeout(() => {
                setIsHidden(true);
            }, 500);
 
        }
        
    };


    const fadeOutStyle = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-out', // Adjust the transition duration and timing function
    };

    document.addEventListener('click', handleClick);
return (
    
    <div class={isHidden ? 'hidden' : ''}>
        <div style={fadeOutStyle}>

            <div class="container" style={{ width: "800" }}>
                <div class="textcontainer">
                <TypingEffect text="placeholder." speed={5} />

                </div>
            </div>
        </div>
    </div>

);
};


export default Portfolio;