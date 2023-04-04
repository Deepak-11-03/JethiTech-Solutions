import React from 'react'
import './style.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

function Footer() {
  return (
    <div className='footerpage'>
      <div className='footer'>
        <img src="./logo.jpg" alt="" />
        <div className="links">
          <h3>Company</h3>
          <br />
          <ul>
            <li>Home</li>
            <li>Our Offerings</li>
            <li>Out Team</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="links">
        <h3>Useful links</h3>
        <br />
        <ul>
          <li>Blogs</li>
          <li>FAQ's</li>
        </ul>
        </div>
        <div className="contactLinks">
          <div><EmailOutlinedIcon/><div><h4>Email:</h4> <h6>support@inreglobal.com</h6></div></div>
          <br />
          <div><PhoneInTalkOutlinedIcon/><div><h4>Phone:</h4> <h6>+91 | 7019305889</h6></div></div>
        </div>
      </div>
      <div className='copyrightdiv'>
        <h6>Copyright 2023. Designed by INRE Global</h6>
        <div>
          <h6><LinkedInIcon  sx={{fontSize:"16px"}}/> Linkedin</h6>
          <h6><FacebookIcon sx={{fontSize:"16px"}} /> Facebook</h6>
          <h6><TwitterIcon  sx={{fontSize:"16px"}}/> Twitter</h6>
          <h6><InstagramIcon sx={{fontSize:"16px"}}/> Instagram</h6>
        </div>
      </div>
    </div>
  )
}

export default Footer
