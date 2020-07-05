const INITIAL_STATE = {
  firstArgument: "",
  operator: "",
  secondArgument: "",
  currentResult: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE_INPUT":
      if (!state.operator) {
        return { ...state, firstArgument: state.firstArgument + action.payload };
      } else{
        return { ...state, secondArgument: state.secondArgument + action.payload };
      }
    case "ADD_OPERATOR":
      return { ...state, operator: action.payload };
    case "CLEAR_ALL":
      return { ...state, firstArgument: "", operator: "", secondArgument: "", currentResult: "" };
    case "SHOW_RESULT":
      let result = eval(state.firstArgument + state.operator + state.secondArgument);
      return {
        ...state,
        currentResult: result,
        operator: "",
        firstArgument: result,
        secondArgument: ""
      };
    default:
      return state;
  }
};
