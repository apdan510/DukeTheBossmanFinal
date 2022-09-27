import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Duke The Bossman</h1>
      <p>Oakland California</p>

      <h3></h3>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://opensea.io/collection/outofthespeakerbox";
          }}
        >
          Buy NFT Album Now
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
