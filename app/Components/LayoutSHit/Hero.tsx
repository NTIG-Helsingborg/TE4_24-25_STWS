import React from "react";
import bgStarWars from "@/app/Assets/bg-star-wars.jpg";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgStarWars.src})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">The tale of Bananakin</h1>
          <p className="mb-5">
            "- Obi-wan-banobi :You were the chosen one! It was sait you would
            destroy the green, not the brown us all. You were to bring balance
            to the bunch not leave us in darkness.
          </p>
          <p className="mb-5">-Bananakin : I hate you!</p>
          <p className="mb-5">
            -Obi-wan-banobi: you were my brother Bananakin! I loved you.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
