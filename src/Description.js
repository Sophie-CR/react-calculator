import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="description">
      <p>Hello from Description</p>

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
