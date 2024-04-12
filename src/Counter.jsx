import { useReducer } from "react";

const reducer = (state, action) => {
  // using switch case:

  //   switch (action.type) {
  //     case "DECREMENT":
  //       return { count: state.count - 1 };
  //     case "RESET":
  //       return { count: 0 };
  //     case "INCREMENT":
  //       return { count: state.count + 1 };
  //     default:
  //       return state;
  //   }

  // using if statement
  if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  } else if (action.type === "RESET") {
    return { count: 0 };
  } else if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  } else {
    return state;
  }
};

const initialState = {
  count: 0,
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleDecrease = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };
  const handleIncrease = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  return (
    <div
      style={{ backgroundColor: "#000", color: "#efefef", textAlign: "center" }}
    >
      <h1>{state.count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};

export default Counter;
