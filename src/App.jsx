import { useReducer } from "react";
import Todos from "./Todos";
import TodoForm from "./TodoForm";

const reducer = (todos, action) => {
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
      <TodoForm todoReducer={reducer}/>
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
