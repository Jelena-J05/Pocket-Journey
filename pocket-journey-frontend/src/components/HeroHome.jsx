import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroText from "./HeroText";
import NavBar from "./NavBar";

const HeroHome = () => {
  return (
    <>
    <div className="hero-container">
      <NavBar/>
    </div>
    <HeroText />
    </>
  );
};

export default HeroHome;


