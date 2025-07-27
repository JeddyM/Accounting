import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4 px-4 sm:px-6 lg:px-8">
        <div className="text-xl font-bold">Logo</div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/solutions">Solutions</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
        </ul>
        {/* Hamburger Icon */}
        
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-sm px-6 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/solutions" onClick={toggleMenu}>
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/pricing" onClick={toggleMenu}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/company" onClick={toggleMenu}>
                  Company
                </Link>
              </li>
              <li>
                <Link to="/blogs" onClick={toggleMenu}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>

    /* <header className=" fixed top-0 w-full z-50 flex justify-between items-center p-4 bg-white shadow-sm max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

   <div className="text-xl font-bold">Human Resources</div>
      <nav className="hidden md:flex space-x-6">
        <a href="/">Home</a>
        <a href="/solutions">Solutions</a>
        <a href="/pricing">Pricing</a>
        <a href="/company">Company</a>
        <a href="/blogs">Blogs</a>
      </nav>
      
    </header>
  */
  );
}

export default Navbar;
