export const toAddOperator = (operator) => {
  return {
    type: "ADD_OPERATOR",
    payload: operator,
  };
};

export const toSaveInput = (number) => {
  console.log("action is invoked");
  return {
    type: "SAVE_INPUT",
    payload: number,
  };
};

export const toDelete = () => {
  return { type: "CLEAR_ALL" };
};

export const toShowResult = () => {
  return { type: "SHOW_RESULT" };
};
