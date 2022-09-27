import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            West Coast Villains
            <i class="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                About Dre
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="https://github.com/briancodex/react-website-v1/blob/master/src/components/Footer.js"
                className="nav-links"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://open.spotify.com/artist/2gw3V1QeP9lIKFhcCQpvWU?autoplay=true";
                }}
              >
                Listen on Spotify
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="https://github.com/briancodex/react-website-v1/blob/master/src/components/Footer.js"
                className="nav-links"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://opensea.io/collection/outofthespeakerbox";
                }}
              >
                Buy NFTs
              </Link>
            </li>

            <li></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
