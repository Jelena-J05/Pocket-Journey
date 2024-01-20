import React, { lazy } from "react";
import Typed from "react-typed";

const HeroText = (props) => {
  return (
    <React.Fragment>
      <Typed
        strings={[
          "Here you can enjoy booking flights",
          "Here you can plan your trip",
          "Here you talk about travel",
        ]}
        typeSpeed={50}
        backSpeed={35}
        backDelay={1000}
        loop
        smartBackspace
        className="bottom-text fs-5"
      />
    </React.Fragment>
  );
};

export default HeroText;
