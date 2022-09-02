import React from "react";
import Screen from "./Screen.js";
import ButtonBox from "./ButtonBox.js";
import Button from "./Button.js";
import "./Calculator.css";

export default function Calculator() {
  return (
    <div className="calculator">
      <Screen />
      <ButtonBox>
        <Button />
      </ButtonBox>
    </div>
  );
}
