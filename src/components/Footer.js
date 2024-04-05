import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
   return (
    <div className="footer">
      <FaGithub />
      <span>Follow me on GitHub</span>
       <a href="https://github.com/babis74">Web Dev from Ioannina</a>
      
    </div>
  );
};

export default Footer;
