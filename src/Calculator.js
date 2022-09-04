import React from "react";
import Screen from "./Screen.js";
import ButtonBox from "./ButtonBox.js";
import Button from "./Button.js";
import "./Calculator.css";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

export default function Calculator() {
  return (
    <div className="calculator">
      <Screen value="0" />
      <ButtonBox>
        {btnValues.flat().map((btn, index) => {
          return (
            <Button
              key={index}
              className={btn === "=" ? "equals" : "game-button"}
              value={btn}
              onClick={() => {
                console.log(`${btn} clicked!`);
              }}
            />
          );
        })}
      </ButtonBox>
    </div>
  );
}
