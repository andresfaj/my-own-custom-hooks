export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "ABC":
      throw new Error("Action.type = ABC no esta implementada");

    case "[TODO] Add Todo":
      return [...initialState, action.payload];

    case "[TODO] Delete todo":
      return initialState.filter((item) => item.id !== action.payload);

    case "[TODO] Toggle todo":
      return initialState.map((item) => {
        if (item.id === action.payload) {
          return { ...item, done: !item.done };
        }
        return item;
      });

    default:
      return initialState;
  }
};
