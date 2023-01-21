import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Javascript",
          "MEAN Stack Developer",
          "MERN Stack Developer",
          "Tailwind CSS",
          "Github",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
