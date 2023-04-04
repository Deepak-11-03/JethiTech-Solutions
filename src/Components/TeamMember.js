import React from "react";

function TeamMember() {
  return (
    <div className="container">
      <h1>Our Team Members</h1>
      <div className="grid" id="team">
        <div className="box" >
          <img src="./member1.jpg" alt="" />
          <h4>Brajesh Pathak</h4>
          <p>
            Assuring your capital is in safe hands, we provide detailed
            verification reports of the project and developer. These are
            customized and detailed...
          </p>
          <div className="viewmorelink">
             <span>view more</span>
          </div>
        </div>
        <div className="box">
          <img src="./member2.jpg" alt="" />
          <h4>Deepak Shukla</h4>
          <p>
            A Chartered Accountant & Company Secretary, has over a decade of
            experience in managing realty focused venture capital funds, and was
            heading Azure Capital Advisors Private Limited. He has also been...
          </p>
          <div className="viewmorelink">
             <span>view more</span>
          </div>
        </div>
        <div className="box">
          <img src="./member3.jpg" alt="" />
          <h4>Alok Kumar Singh</h4>
          <p>
            Deepak Shukla has completed his B.Tech (hons.) from the Indian
            Institute of Technology (IIT) Kharagpur and obtained an MBA from the
            Indian Institute of Management (IIM) Ahmedabad, India. He has an
            overall experience of 11 years in firms like Credit Suisse, FICO,
            Alvarez and Marsal and The World Bank across geographies. In the
            past few years, his focus is in solving real world challenges using
            AI. He has engaged in development of voicebots for contact centres,
            automated training and validation for Autonomous vehicles
            applications.
          </p>
          <div className="viewmorelink">
             <span>view more</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
