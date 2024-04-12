import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }

  // if(action.type === "DECREMENT"){
  //     return {count: state.count - 1};
  // }
  // if(action.type === "RESET"){
  //     return {count: 0};
  // }
  // if(action.type === "INCREMENT"){
  //     return {count : state.count + 1};
  // }
  // return state;
};
const initialValue = {
  count: 0,
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  console.log(state);
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
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};

export default Counter;
