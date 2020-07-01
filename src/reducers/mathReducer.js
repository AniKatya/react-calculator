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
      } else {
        return { ...state, secondArgument: state.secondArgument + state.action.payload };
      }
    case "ADD_OPERATOR":
      return { ...state, operator: action.payload };
    case "CLEAR_ALL":
      return { ...state, firstArgument: "", operator: "", secondArgument: "", currentResult: "" };
    case "SHOW_RESULT":
      return { ...state, currentResult: state.firstArgument + state.operator + state.secondArgument };
    default:
      return state;
  }
};
