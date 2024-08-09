import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm">© 2024 YourCompany. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100094416483981" target='_blank' className="text-primary hover:text-white">
            <FaFacebookF />
            </a>
            <a href="https://x.com/enayetu_syl" target='_blank'  className="text-primary hover:text-white">
              <FaTwitter/>
            </a>
            <a href="https://www.linkedin.com/in/md-enayetur-rahman/" target='_blank' className="text-primary hover:text-white">
              <FaLinkedinIn/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
