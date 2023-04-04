import React from "react";
import "./style.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Offerings() {
  return (
    <div className="container">
      <h1>Our Offerings</h1>
      <span>
        This whole purchase journey can be divided into three stages. For more
        details, <a href="/">Click Here</a>
      </span>
      <br /><br /><br />
      <div className="steps">
        <h3>1 &nbsp;Pre-Booking</h3>
        <h3>2 &nbsp;Post Booking & Pre-Registration</h3>
        <h3>3 &nbsp;Post-Registration</h3>
      </div>
      <div className="grid">
        <div className="box">
          <img src="./offeringImage1.jpg" alt="" />
          <h4>Background verification</h4>
          <p>
            Assuring your capital is in safe hands, we provide detailed
            verification reports of the project and developer. These are
            customized and detailed...
          </p>
          <div className="buttonWithlink viewmorelink">
            <button>Contact us <ArrowForwardIcon/></button> <span>INR 3000/Project</span>
          </div>
        </div>
        <div className="box">
          <img src="./offeringImage2.jpg" alt="" /> <h4>Virtual site visit</h4>
          <p>It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...</p>
          <button>Contact us <ArrowForwardIcon/></button>
        </div>
        <div className="box">
          <img src="./offeringImage3.jpg" alt="" /> <h4>Title diligence</h4>
          <p>Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of...</p>
          <button>Contact us <ArrowForwardIcon/></button>
        </div>
      </div>
    </div>
  );
}

export default Offerings;
