import React, { useState, createElement } from 'react';
import { useSpring, animated } from 'react-spring';
import ReactDOM from "react-dom";
import './Pages.css';
import TypingEffect from './effects/TypingEffect';

const Hobbies = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [bounce, setDebounce] = useState(false);

    
    const handleClick = (event) => {
        if(!bounce){   
            
            setDebounce(true);
            if (event.target.id == "Hobbies"  ) {
            
                setIsHidden(false);
                const timer = setTimeout(() => {
                    setIsVisible(true);
                }, 1000);
                
            }
            else if (event.target.id && event.target.tagName =="LI" ) {
        
                setIsVisible(false);
                const timer = setTimeout(() => {
                    setIsHidden(true);
                }, 500);
    
            }
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
                    <p>
                        Currently I have nothing to put here, but I plan to place photos of me partaking in my various hobbies ranging from photography, welding, auto work, gardening, etc. They will be in the format of polaroids (once i populate the hobbies it'll make more sense) and will be interactable. For now though, you will just have to imagine that scenario in as i work out the design for the rest of this portfolio.
                        </p>

                </div>
            </div>
        </div>
    </div>

);
};


export default Hobbies;