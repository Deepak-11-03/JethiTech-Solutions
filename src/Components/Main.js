import React from "react";
import Offerings from "./Offerings";
import "./style.css";
import TeamMember from "./TeamMember";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Blogs from "./Blogs";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
function Main() {
  return (
    <div className="main">
      <div className="section1">
        <img src="./image1.jpg" alt="image1" />
        <div id="shape"><h1>Making Your <span style={{color:"#FAFF00"}}>Real Estate</span> Purchase Journey Faster And Transparent</h1></div>
      </div>
      <div className="section2">
        <img src="./housekey.jpg" alt="house" style={{width:"40%"}}/>
        <div>
          <h2>Who We Are</h2>
          <p>The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.</p> 
          <button>Contact Now <ArrowForwardIcon/> </button>
        </div>
      </div>
      <Offerings/>
      <TeamMember/>
      <Blogs/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default Main;
