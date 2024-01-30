/* import React from "react";
import { useSpring, animated } from "react-spring";
import FlyingImage from "../images/FlyingImage.png";

const FlyingPlane = () => {
  const flyingProps = useSpring({
    from: {
      transform: "translate3d(-10%, 90%, 0)",
      opacity: 1,
    },
    to: {
      transform: "translate3d(-110%, -40%, 0)",
      opacity: 0,
    },
    config: { duration:5000 },
    reset: true,
    loop: true,
  });

  return (
    <animated.div
      style={{
        ...flyingProps,
        position: "absolute",
        left: "65%",
        zIndex: 2,
      }}
      className="flying-plane"
    >
      <img
        src={FlyingImage}
        alt="Flying Plane"
        style={{ width: "40%", height: "40%" }}
      />
    </animated.div>
  );
};

export default FlyingPlane;



 */