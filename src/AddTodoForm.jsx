import { useState } from "react";
import { v4 as uuid } from "uuid";

const AddTodoForm = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const handleAddTodo = (e) => {
    e.preventDefault();
    if(title.trim().length === 0){
      alert("Please Enter something!!!")
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
