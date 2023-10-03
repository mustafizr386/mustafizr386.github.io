import React, { useState, createElement } from 'react';
import { useSpring, animated } from 'react-spring';
import ReactDOM from "react-dom";
import './Pages.css';
import TypingEffect from './effects/TypingEffect';


const Portfolio = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [bounce, setDebounce] = useState(false);


    const handleClick = (event) => {

        if (!bounce) {
            setDebounce(true);
            if (event.target.id === "Home") {

                setIsHidden(false);
                const timer = setTimeout(() => {
                    setIsVisible(true);
                }, 1000);
                return () => clearTimeout(timer);
            }
            else if (event.target.id && event.target.tagName == "LI") {

                setIsVisible(false);
                const timer = setTimeout(() => {
                    setIsHidden(true);
                }, 500);
                return () => clearTimeout(timer);
            }
        }
    };


    const fadeOutStyle = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-out',
    };


    document.addEventListener('click', handleClick);



    return (
        <div class={isHidden ? "banner" :"bannerHome"}>
            <h1>Mustafiz Rahman</h1>
            <p>The landing page for all things related to me.</p>
            <div class={isHidden ? 'hidden' : ''}>
                <div style={fadeOutStyle}>
                        <div class="textcontainer" style={{textAlign: 'center'}}>
                            <TypingEffect text="Welcome to my humble portfolio. On this site will be a collection information about be presented in fun little interactive ways. Some of the pages might be a little drab as of right now, but they will soon be updated to have fun little functions added to them." speed={5} />

                        </div>
                </div>
            </div>
        </div>
    );
};


export default Portfolio;