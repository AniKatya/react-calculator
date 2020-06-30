import React from "react";
import Button from "./Button";
import "../css/buttonboard.css";
import "../css/button.css";

export default function ButtonBoard() {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operators = ["/", "*", "-", "+"];
  return (
    <div className="button-board-main">
      <Button key="C" value="C" className="delete-button" />
      {operators.map((el) => (
        <Button key={el} value={el} className="operator-button" />
      ))}
      <span className="number-buttons-box">
        {numbers.map((num) => (
          <Button key={num} value={num} className="number-button" />
        ))}
      </span>
      <Button key="0" value="0" className="null-button" />
      <Button key="," value="," className="decimal-button" />
      <Button key="=" value="=" className="equality-button" />
    </div>
  );
}
