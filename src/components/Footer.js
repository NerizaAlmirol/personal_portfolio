import React from 'react';
import  InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import  LinkedInIcon from '@material-ui/icons/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <a href="https://www.linkedin.com/in/neriza-almirol/"  target="_blank">
          <LinkedInIcon />
          </a>
          <a href="mailto:hello@nerizaalmirol.com">
          <EmailIcon />
          </a>  
          <a href="https://github.com/NerizaAlmirol"  target="_blank">
          <GithubIcon />
          </a>
        </div>
        <p> &copy; 2022 <a href="https://www.linkedin.com/in/neriza-almirol/">Neriza Almirol</a></p>
    </div>
  )
}

export default Footer