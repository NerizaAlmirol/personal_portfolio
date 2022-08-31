import React from 'react';
import  InstagramIcon from '@material-ui/icons/Instagram';
import  TwitterIcon from '@material-ui/icons/Twitter';
import  FacebookIcon from '@material-ui/icons/Facebook';
import  LinkedInIcon from '@material-ui/icons/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
        </div>
        <p> &copy; 2022 <a href="https://www.linkedin.com/in/neriza-almirol/">Neriza Almirol</a></p>
    </div>
  )
}

export default Footer