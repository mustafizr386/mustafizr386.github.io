import React, { useState, createElement } from 'react';
import { useSpring, animated } from 'react-spring';
import ReactDOM from "react-dom";
import './Pages.css';
import ReactCardFlip from 'react-card-flip';

const Skills = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [bounce, setDebounce] = useState(false);

    const [Java, JavaFlipped] = useState(false);
    const [Python, PythonFlipped] = useState(false);
    const [JavaScript, JavaScriptFlipped] = useState(false);

    const handleCardClick = (event) => {
        if (!isHidden && event.target.tagName != "LI") {
            if (event.target.id === "Java") {
                JavaFlipped(!Java);
            }
            else if (event.target.id === "Python") {
                PythonFlipped(!Python);
            }
            else if (event.target.id === "JavaScript") {
                JavaScriptFlipped(!JavaScript);
            }
        }
    };

    const handleClick = (event) => {
        if (!bounce) {

            setDebounce(true);
            if (event.target.id === "Skills") {

                setIsHidden(false);
                const timer = setTimeout(() => {
                    setIsVisible(true);
                }, 1000);

            }
            else if (event.target.id && event.target.tagName == "LI") {

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
                        <div style={{ paddingRight: '20px', paddingBottom: '20px', position: 'relative', float: 'left' }}>
                            <ReactCardFlip isFlipped={Java} flipDirection="vertical" >
                                <div className="flip-card" key="front" style={{ backgroundColor: 'orange' }} onClick={handleCardClick}>
                                    <div className="flip-card-inner">
                                        <div id="Java" className="flip-card-front">
                                            <p id="Java">Java</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flip-card" style={{ width: '400px' }} key="back" onClick={handleCardClick}>
                                    <div className="flip-card-inner">
                                        <div id="Java" className="flip-card-back" style={{ backgroundColor: '#FFC300' }}>
                                            <p id="Java">I've been working with java for over 4 years with most of my experience in an educational setting. This language along with python are my go to languages for solving labs, programming competition questions, and for more complex math problems.</p>
                                        </div>
                                    </div>
                                </div>
                            </ReactCardFlip>
                        </div>
                        <div style={{ paddingRight: '20px', paddingBottom: '20px', position: 'relative', float: 'left', transition: 'translate .3s ease' }}>
                            <ReactCardFlip isFlipped={Python} flipDirection="vertical">
                                <div className="flip-card" key="front" style={{ backgroundColor: 'CornflowerBlue' }} onClick={handleCardClick}>
                                    <div className="flip-card-inner">
                                        <div id="Python" className="flip-card-front">
                                            <p id="Python">Python</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flip-card" style={{ width: '200px' }} key="back" onClick={handleCardClick}>
                                    <div className="flip-card-inner">
                                        <div id="Python" className="flip-card-back" style={{ backgroundColor: '#5F9EA0' }}>
                                            <p id="Python">python is cool</p>
                                        </div>
                                    </div>
                                </div>
                            </ReactCardFlip>
                        </div>
                        <div style={{ paddingRight: '20px', paddingBottom: '20px', position: 'relative', float: 'left', transition: 'translate .3s ease' }}>
                            <ReactCardFlip isFlipped={JavaScript} flipDirection="vertical">
                                <div className="flip-card" key="front" style={{ backgroundColor: 'Yellow', color: 'black' }} onClick={handleCardClick}>
                                    <div className="flip-card-inner">
                                        <div id="JavaScript" className="flip-card-front">
                                            <p id="JavaScript">JavaScript</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flip-card" style={{ width: '200px' }} key="back" onClick={handleCardClick}>
                                    <div className="flip-card-inner">
                                        <div id="JavaScript" className="flip-card-back" style={{ backgroundColor: '#CCCC00', color: 'black' }}>
                                            <p id="JavaScript">I'm not that great at javascript, but as you can see I make do.</p>
                                        </div>
                                    </div>
                                </div>
                            </ReactCardFlip>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default Skills;