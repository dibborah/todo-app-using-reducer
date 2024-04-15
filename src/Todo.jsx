import { MyContext } from "./MyProvider";

const Todo = ({ id, title, completed }) => {
  const { dispatch } = MyContext();
  const handleDeleteTodo = () => {
    dispatch({
      type: "DELETE_TODO",
      payload: { id: id },
    });
  };
  const handleToggle = () => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: { id: id },
    });
  };
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "1rem",
        backgroundColor: "#cecece",
        borderRadius: "1rem",
        margin: "1rem",
        textAlign: "center",
      }}
    >
      <h4>id: {id}</h4>
      <h4 style={{ textDecoration: completed ? "line-through" : "solid" }}>
        title: {title}
      </h4>
      {/* Remember boolean values never gets printed. Based on that we have to print Strings or other values */}
      <h4>completed: {completed ? "true" : "false"}</h4>
      <button onClick={handleDeleteTodo}>Delete</button>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default Todo;
