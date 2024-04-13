import { useReducer } from "react";
import Todos from "./Todos";
import TodoForm from "./TodoForm";

const reducer = (todos, action) => {
  if(action.type === "DELETE"){
    return todos.filter((todo) => todo.id !== action.payload);
  }
  return todos;
};

const initialTodos = [
  { id: "1", title: "React by CodProg.com", completed: true },
  { id: "2", title: "React Project Libraries", completed: false },
  { id: "3", title: "Practicing coding", completed: true },
];

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <div>
      <TodoForm todoReducer={reducer} />
      <Todos todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
