import React from "react";
import "./style.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export default function Header() {
  const [sidebar,setSidebar] = useState(false)
 
  return (
    <header>
      <span className="menuButton" onClick={()=>setSidebar(!sidebar)}>{sidebar ? <CloseIcon/> :<MenuIcon/>} </span>
      <div className="header">
        <div className="logo">
          <img src="./logo.jpg" alt="website logo" />
        </div>
        <ul className="nav" style={{display:!sidebar && "none"}}>
          <li>Home</li>
          <li>Our Offerings</li>
          <li>Our Team</li>
          <li>Contact Us</li>
          <li>Blogs</li>
        </ul>
        <div className="button">
          <button>Register Now</button>
        </div>
      </div>
    </header>
  );
}
