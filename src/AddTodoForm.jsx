import { useState } from "react";
import { MyContext } from "./App";
const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const { dispatch } = MyContext();
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("Please Enter something!!!");
      return;
    }
    dispatch({
      type: "ADD_TODO",
      payload: {
        newTodo: { id: crypto.randomUUID(), title: title, completed: false },
      },
    });
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
