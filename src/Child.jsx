import GrandChild from "./GrandChild";

const Child = () => {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#7EAA92" }}>
      <h3>Child</h3>
      <GrandChild />
    </div>
  );
};

export default Child;
