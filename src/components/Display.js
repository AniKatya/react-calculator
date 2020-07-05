import React from "react";
import { connect } from "react-redux";

import "../css/display.css";

class Display extends React.Component {
  toRenderValue = () => {
    if (this.props.operator === "=") {
      return this.props.currentResult;
    } else if(this.props.operator && this.props.operator!=="="){
      return this.props.secondArgument;
    } else {
      return this.props.firstArgument;
    }
  };

  render() {
    return (
      <div className="display-main">
        <input value={this.toRenderValue()} readOnly></input>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstArgument: state.math.firstArgument,
    secondArgument: state.math.secondArgument,
    operator: state.math.operator,
    currentResult: state.math.currentResult,
  };
};

export default connect(mapStateToProps)(Display);
