import { legacy_createStore as createStore } from "redux";
const initialState = { counter: 0, hideCounter: false };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      hideCounter: state.hideCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      hideCounter: state.hideCounter,
    };
  }

  if (action.type === "increaseBy") {
    return {
      counter: state.counter + action.amount,
      hideCounter: state.hideCounter,
    };
  }

  if (action.type === "hideCounter") {
    return {
      counter: state.counter,
      hideCounter: !state.hideCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
