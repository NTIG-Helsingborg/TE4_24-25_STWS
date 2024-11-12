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
          <h1 className="mb-5 text-5xl font-bold">STWS KNOWLAGE</h1>
          <p className="mb-5 font-bold">This is place of knowlage</p>
          <p className="mb-5 font-bold">
            Beliefes does not matter here Sith or Jedi
          </p>
          <p className="mb-5 font-bold">
            This is a place where those untaught and return wiser
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
