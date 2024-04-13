import { useContext } from "react";
import  {MyAppContext}  from "./main";

const GrandChild = () => {
  const { key1, someFunction }  = useContext(MyAppContext);
  return (
    <div style={{ padding: "2rem", backgroundColor: "#FFD9B7" }}>
      <h4>GrandChild</h4>
      <h5 style={{ color: "red" }}>key1: {key1}</h5>
      <button onClick={someFunction}>Call My Func</button>
    </div>
  );
};

export default GrandChild;
