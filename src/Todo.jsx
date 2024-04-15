import { useTodos } from "./contexts/TodosProvider";

const Todo = ({ id, title, completed }) => {
  const { handleDeleteTodo,  handleToggleTodo } = useTodos();

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
      <button onClick={() => handleDeleteTodo(id)}>Delete</button>
      <button onClick={() => handleToggleTodo(id)}>Toggle</button>
    </div>
  );
};

export default Todo;
