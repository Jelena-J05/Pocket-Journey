import React from "react";
import { useSpring, animated } from "react-spring";
import FlyingImage from "../images/FlyingImage.jpg";

const FlyingPlane = () => {
  const flyingProps = useSpring({
    from: { transform: "translate3d(100%,0,0)" },
    to: { transform: "translate3d(-100%,0,0)" },
    config: { duration: 10000 },
    reset: true,
    loop: true,
  });

  return (
    <animated.div style={flyingProps} className="flying-plane">
      <img
        src={FlyingImage}
        alt="Flying Plane"
        style={{ width: "15%", height: "15%" }}
      />
    </animated.div>
  );
};

export default FlyingPlane;
