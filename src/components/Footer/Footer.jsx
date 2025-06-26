import React from 'react'
import './Footer.css';
// import youtube_icon from '../../assets/youtube_icon.png';
// import twitter_icon from '../../assets/twitter_icon.png';
// import instagram_icon from '../../assets/instagram_icon.png';
// import facebook_icon from '../../assets/facebook_icon.png';

import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        {/* <img src={youtube_icon} alt="" className='youtube_logo'/> */}
        <FaYoutube size="30px" cursor="pointer" onMouseOver={({target}) => target.style.color = '#FF0000'}
          onMouseOut={({target}) => target.style.color = 'white'}/>
        {/* <img src={twitter_icon} alt="" className='twitter_logo'/> */}
        <FaTwitter size="30px" cursor="pointer" onMouseOver={({target}) => target.style.color = '#1DA1F2'}
          onMouseOut={({target}) => target.style.color = 'white'}/>
        {/* <img src={instagram_icon} alt="" className='instagram_logo'/> */}
        <FaInstagram size="30px" cursor="pointer" onMouseOver={({target}) => target.style.color = '#C13584'}
          onMouseOut={({target}) => target.style.color = 'white'}/>
        {/* <img src={facebook_icon} alt="" className='facebook_logo'/> */}
        <FaFacebook size="30px" cursor="pointer" onMouseOver={({target}) => target.style.color = '	#1877F2'}
          onMouseOut={({target}) => target.style.color = 'white'}/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">
        © 2024 - 2025 Netflix, Inc.
      </p>
      
    </div>
  )
}

export default Footer
