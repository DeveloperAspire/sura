import React from "react";
import classes from './Footer.module.css'
import facebook from '../../images/icon-facebook.svg'
import instagram from "../../images/icon-instagram.svg";
import pinterest from "../../images/icon-pinterest.svg";
import twitter from "../../images/icon-twitter.svg";


const Footer = () => {
  return (
    <footer>
      <h2>Sura</h2>
      <ul className={classes.features}>
        <li>Features</li>
        <li> Link Shortening</li>
        <li> Branded Links</li>
        <li> Analytics</li>
      </ul>
      <ul>
        <li> Resources</li>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>
      <ul>
        <li>Company</li>
        <li> About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
      <div>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
            <img src={instagram} alt="" />
      </div>
    </footer>
  );
};

export default Footer
