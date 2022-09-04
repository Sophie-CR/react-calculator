import React from "react";
import Screen from "./Screen.js";
import ButtonBox from "./ButtonBox.js";
import Button from "./Button.js";
import "./Calculator.css";

export default function Calculator() {
  return (
    <div className="calculator">
      <Screen value="0" />
      <ButtonBox>
        <Button
          className="game-button test"
          value="0"
          onClick={() => {
            console.log("Button clicked!");
          }}
        />
      </ButtonBox>
    </div>
  );
}
