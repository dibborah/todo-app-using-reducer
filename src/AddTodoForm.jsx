import { useState } from "react";
import { useTodos } from "./contexts/TodosProvider";
const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const { addNewTodo } = useTodos();
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("Please Enter something!!!");
      return;
    }
    addNewTodo(title);
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
