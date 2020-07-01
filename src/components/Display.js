import React from "react";
import { connect } from "react-redux";

import "../css/display.css";

class Display extends React.Component {
  toRenderValue=()=>{
    if (this.props.operator&&this.props.operator!=="="&&!this.props.currentResult){
      console.log("first is invoked");
      return this.props.secondArgument
    } else if (this.props.operator ==="="){
      console.log("show result is invoked");
      return this.props.currentResult
    } else {
      console.log("third is invoked");
      return this.props.firstArgument

    }
  }

  render() {
    return (
      <div className="display-main">
        <input
          value={this.toRenderValue()}
          readOnly
        ></input>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstArgument: state.math.firstArgument,
    operator: state.math.operator,
    secondArgument: state.math.secondArgument,
    currentResult: state.math.currentResult,
  };
};

export default connect(mapStateToProps)(Display);
