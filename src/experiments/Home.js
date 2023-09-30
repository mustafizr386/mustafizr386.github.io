import React, { useState, createElement } from 'react';
import { useSpring, animated } from 'react-spring';
import ReactDOM from "react-dom";
import './Pages.css';
import TypingEffect from './effects/TypingEffect';
import ClickManager from './effects/ClickManager';

const Portfolio = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [clicked, setClick] = useState(false);

    const customEvent = (eventName, eventHandler) => {

    };

    const handleClick = (event) => {
        
        if (event.target.id == "Home"  ) {
            alert("test");
            setClick(true);
            setIsHidden(false);
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            setClick(false);
            return () => clearTimeout(timer);
        }
        else if (event.target.id ) {
            setClick(true);
            setIsVisible(false);
            const timer = setTimeout(() => {
                setIsHidden(true);
            }, 500);
            setClick(false);
            return () => clearTimeout(timer);
        }
        
    };


    const fadeOutStyle = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-out', 
    };

    document.addEventListener('click', handleClick);
return (
    
    <div class={isHidden ? 'hidden' : ''}>
        <div style={fadeOutStyle}>
        <div class="container" style={{ width: "800" }}>
            <div class="textcontainer">
            <TypingEffect text="Welcome to my humble portfolio. Here I'll have a collection of pictures and stories relating to myself and what I've done within the scope of computing and more. Although you are most likely here because you want to see a showcase of what I can create, so here's a little collection of some old programs I've made in school and outside of school." speed={5} />

                </div>
                </div>
    </div>
    </div>

);
};


export default Portfolio;