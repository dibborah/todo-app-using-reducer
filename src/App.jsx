import MyComponent from "./MyComponent";
import { createContext } from "react";

// prop drilling se bachne ne ke liya hum context api ka use karte hain

// prop drilling to pass data
// Through props data in react is always passed from PARENT to CHILD

// ---- CONTEXT WRAPPER --------

// COMPONENTS

// PARENT
//     |
//    🔻
// CHILD
//     |
//    🔻
// GRAND-CHILD

// ---- CONTEXT WRAPPER --------

// export const MyAppContext = createContext();
const MyAppContext = createContext();

const App = () => {
  const myFunc = () => {
    console.log("Calling myFunc");
  };
  const obj1 = {
    id: 10702,
    myFunc: myFunc
  }
  return (
    <MyAppContext.Provider value={obj1}>
      <div
        style={{ padding: "2rem", backgroundColor: "#C8E4B2", height: "100vh" }}
      >
        <h1>App</h1>
        <MyComponent />
      </div>
    </MyAppContext.Provider>
  );
};

export default App;
export {MyAppContext};
