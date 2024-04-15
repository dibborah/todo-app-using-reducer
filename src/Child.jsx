import GrandChild from "./GrandChild";
import { useContext } from "react";
import  {MyAppContext}  from "./mainEarlier";

const Child = () => {
  const {key2} = useContext(MyAppContext);
  return (
    <div style={{ padding: "2rem", backgroundColor: "#7EAA92" }}>
      <h3>Child</h3>
      <p>key2 : {key2}</p>
      <GrandChild />
    </div>
  );
};

export default Child;
