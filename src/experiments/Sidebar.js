// Sidebar.js

import React, { useState, createElement } from 'react';
import { useSpring, animated } from 'react-spring';
import './Sidebar.css';
import { thisExpression } from '@babel/types';
import Cookies from 'js-cookie';




const Sidebar = () => {
  const [displayText, setDisplayText] = useState('+');
  const [collapsed, setCollapsed] = useState(true);
  var cookieValue = Cookies.get("value");
  if(!cookieValue){
    cookieValue = 0;
  }
  
  const [value, setNumber] = useState(parseInt(cookieValue));

  const sidebarProps = useSpring({
    transform: collapsed ? 'translateX(-200px)' : 'translateX(0px)',
  });
  

  const saveCookie = () =>{
    Cookies.set("value",value);
  }

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const collapse = () =>{
   setDisplayText('+');
   setCollapsed(true);
   setNumber(value + 1);
    };
  const open = () =>{
    setDisplayText('-');
    setCollapsed(false);
    setNumber(value + 1);
  };

  return (
  
    <animated.div className="sidebar" style={sidebarProps} onMouseEnter={open} onMouseLeave={collapse} >
      <div  className="toggle-button" >
      <div className ="menue">Menue</div>
        <div className="plus">{displayText}</div>
      </div>
      <ul>
        <li id="Home">Home</li>
        <li id="About Me">About Me</li>
        <li id="Skills">Skills</li>
        <li id="Hobbies">Hobbies</li>
        <li id="Contact">Contact</li>
        <li onClick={saveCookie}>Save</li>
      </ul>
    </animated.div>
  );
};

export default Sidebar;
