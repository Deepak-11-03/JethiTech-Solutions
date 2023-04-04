import React from "react";
import "./style.css";

export default function Header() {
  return (
   <>
     <header>
      <div className="logo">
      <img src="./logo.jpg" alt="website logo" />
      </div>
      <ul className="nav">
        <li>Home</li>
        <li>Our Offerings</li>
        <li>Our Team</li>
        <li>Contact Us</li>
        <li>Blogs</li>
      </ul>
      <div className="button">
        <button>Register Now</button>
      </div>
    </header>
    <hr />
   </>
  );
}
