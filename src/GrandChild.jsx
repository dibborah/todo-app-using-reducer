import { useContext } from "react";
import { MyAppContext } from "./App";

const GrandChild = () => {
  const obj1 = useContext(MyAppContext);
  const {id, myFunc} = obj1;
  return (
    <div style={{ padding: "2rem", backgroundColor: "#FFD9B7" }}>
      <h4>GrandChild</h4>
      <h5 style={{color:"red"}}>id: {id}</h5>
      <button onClick={myFunc}>Call My Func</button>
    </div>
  );
};

export default GrandChild;
