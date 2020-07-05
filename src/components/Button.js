import React from "react";
import { connect } from "react-redux";
import { toAddOperator, toSaveInput, toShowResult, toDelete } from "../actions/actions";

import "../css/button.css";
import "../css/buttonboard.css";

function Button(props) {
  const avoidDuplicate=(key)=>{
    if (props.operator && props.secondArgument !== key) {
      props.toSaveInput(key);
    } else if (props.operator && props.secondArgument === key) {
        return null
    } else if (!props.operator && props.firstArgument !== key) {
      props.toSaveInput(key);
    } else if (props.operator && props.firstArgument === key) {
        return null
    }
}

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
      case "0":
        avoidDuplicate(key);
        break;
      case ".":
        avoidDuplicate(key);
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

const mapStateToProps = (state) => {
  return {
    firstArgument: state.math.firstArgument,
    secondArgument: state.math.secondArgument,
    operator: state.math.operator,
  };
};

export default connect(mapStateToProps, { toAddOperator, toSaveInput, toShowResult, toDelete })(
  Button
);
