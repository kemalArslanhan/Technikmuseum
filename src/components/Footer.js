import React from "react";
import { Link } from "gatsby";
import "../styles/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer  () {
  return (
    <footer className=" bg-gray-800  md:px-8 ">
      <div className="flex flex-col items-center justify-between gap-4  py-6 md:flex-row">
        {/* nav - start */}
        <nav className="flex flex-wrap justify-center text-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
          <Link to="/about" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</Link>
          <Link to="/impressum" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Impressum</Link>
          <Link to="/Kontakt" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Kontakt</Link>
        </nav>
        {/* nav - end */}

        {/* social - start */}
        <div className="flex gap-4">
          <a href="https://twitter.com" target="" rel="noopener noreferrer" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
          </a>

          <a href="https://facebook.com" target="" rel="noopener noreferrer" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" />
          </a>

          <a href="https://linkedin.com" target="" rel="noopener noreferrer" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5" />
          </a>

          <a href="https://github.com" target="" rel="noopener noreferrer" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
          </a>
        </div>
        {/* social - end */}
      </div>

      <div className="py-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p>email@example.com</p>
      </div>
    </footer>
  );
};

export default Footer;

