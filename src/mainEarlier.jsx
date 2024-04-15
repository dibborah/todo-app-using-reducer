import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./AppEarlier.jsx";
const myFunc = () => {
  console.log("Calling myFunc");
};
export const MyAppContext = createContext();
ReactDOM.createRoot(document.getElementById("root")).render(
  <MyAppContext.Provider
    value={{
      key1: "value1",
      key2: "value2",
      someFunction: myFunc,
    }}
  >
    <App />
  </MyAppContext.Provider>
);

// export default MyAppContext;
// export {MyAppContext}
