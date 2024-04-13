const Todo = ({ id, title, completed }) => {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "1rem",
        backgroundColor: "#cecece",
        borderRadius: "1rem",
        margin: "1rem",
        textAlign:"center"
      }}
    >
      <h4>id: {id}</h4>
      <h4>title: {title}</h4>
      {/* Remember boolean values never gets printed. Based on that we have to print Strings or other values */}
      <h4>completed: {completed ? "true" : "false"}</h4>
      <button>Delete</button>
    </div>
  );
};

export default Todo;
