import React from "react";
import { connect } from "react-redux";
import { toAddOperator, toSaveInput, toShowResult, toDelete } from "../actions/actions";

import "../css/button.css";
import "../css/buttonboard.css";

function Button(props) {
  const handleClick = (key) => {
    switch (key) {
      case "C":
        props.toDelete();
        break;
      case "/":
      case "*":
      case "+":
      case "-":
        props.toAddOperator(key);
        break;
      case "=":
        props.toShowResult();
        break;
      default:
        props.toSaveInput(key);
        break;
    }
  };
  return (
    <button className={`button ${props.className}`} onClick={() => handleClick(props.value)}>
      {props.value}
    </button>
  );
}

export default connect(null, { toAddOperator, toSaveInput, toShowResult, toDelete })(Button);
