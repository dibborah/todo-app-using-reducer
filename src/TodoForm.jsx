import { useState } from "react";
import {v4 as uuid} from "uuid";

const TodoForm = ({ dispatch }) => {
  const [title, setTitle] = useState("")
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: { id: uuid(), title: title, completed: false },
    });
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input type="text" id="todoList" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
