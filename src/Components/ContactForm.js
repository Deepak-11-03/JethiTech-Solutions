import React from "react";
import "./style.css";

function ContactForm() {
  return (
    <div className="contactpage">
      <div>
        <h2>Get In Touch With Us To Connect</h2>
        <br />
        <h3>Contact Us</h3>
        <br />
        <br />
        <div className="form">
          <div className="textOnInput">
            <label for="inputText">Full name</label>
            <input className="form-control" type="text" />
          </div>
          <div className="textOnInput">
            <label for="inputText">Email address</label>
            <input className="form-control" type="text" />
          </div>
          <div className="textOnInput">
            <label for="inputText">Mobile</label>
            <input className="form-control" type="text" />
          </div>
          <div className="textOnInput">
            <label for="inputText">Country</label>
            <select name="country">
              <option value="India">India</option>
              <option value="India">Nepal</option>
              <option value="India">Bangladesh</option>
            </select>
          </div>
          <div className="textOnInput">
            <label for="inputText">Stages</label>
            <select name="stages">
              <option value="India">
                I have booked but registration is not done
              </option>
              <option value="India">I have completed all steps</option>
            </select>
          </div>
        </div>
        <br />
          <button id="formButton"><span>Submit</span></button>
      </div>
      <img src="./contact.jpg" alt="customer executive" />
    </div>
  );
}

export default ContactForm;
