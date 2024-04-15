import MyComponent from "./MyComponent";

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

const App = () => {
  return (
    <div
      style={{ padding: "2rem", backgroundColor: "#C8E4B2", height: "100vh" }}
    >
      <h1>App</h1>
      <MyComponent />
    </div>
  );
};

export default App;
