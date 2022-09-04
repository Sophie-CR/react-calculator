import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="description">
      <p>
        I built this calculator app as an exercise in using React, following an
        online tutorial.
      </p>
      <p>
        I gave the calculator its own styling, including making the buttons
        appear more realistic, especially when pressed.
      </p>
      <p>
        This app was fun to build and it gave me the opportunity to learn more
        about how mathematical functions are handled in JavaScript. The
        calculator is fully functional; try some equations for yourself!
      </p>
      <p>
        <a
          href="https://www.sitepoint.com/react-tutorial-build-calculator-app/"
          target="_blank"
          rel="noreferrer"
          title="View the tutorial for building this game"
        >
          <button className="button">Click here</button>
        </a>{" "}
        to check out the tutorial
      </p>
      <p>
        <a
          href="https://calculator-madza.netlify.app/"
          target="_blank"
          rel="noreferrer"
          title="View the demo"
        >
          <button className="button">Click here</button>
        </a>{" "}
        to check out their demo game
      </p>
      <p>
        <a
          href="https://github.com/madzadev/calculator"
          target="_blank"
          rel="noreferrer"
          title="View the demo source code on GitHub"
        >
          <button className="button">Click here</button>
        </a>{" "}
        to check out their source code
      </p>
    </div>
  );
}
