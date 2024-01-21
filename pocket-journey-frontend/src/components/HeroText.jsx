import React from 'react';
import TypeIt from 'typeit-react';

const HeroText = () => {
  return (
    <div className="bottom-text fs-5">
      <TypeIt
        options={{
          strings: [
            "Here you can enjoy booking flights",
            "Here you can plan your trip",
            "Here you talk about travel"
          ],
          speed: 50,
          breakLines: false,
          loop: true,
        }}
      />
    </div>
  );
};

export default HeroText;











/* import Typed from "react-typed";
import React from "react";

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

export default HeroText; */
