import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Blogs() {
  const images = ["./blog1.jpg", "./blog2.jpg", "./blog3.jpg"];

  return (
    <div className="container">
      <h1>Blogs</h1>
      <div className="grid">
        {images.map((card, index) => {
          return (
            <div className="box blogbox" key={index}>
              <img src={card} alt="" />
              <h6>Real Estate, Analysis</h6>
              <div className="dateandauthor" >
                <span style={{display:"flex",alignItems: "flex-end",gap:"3px"}}><CalendarMonthIcon sx={{fontSize: "14px"}}/> <span>09 jun 2022</span> </span>
                <span>By Admin</span>
              </div>
              <h4>Guide for personal property Buying </h4>
              <p style={{ fontSize: "14px" }}>
                "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                do eiusmod temp incididuut labore dolore magna aliqua do
                eiusmod...
              </p>
              <button>
                View more <ArrowForwardIcon />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
