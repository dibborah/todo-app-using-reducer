import Todo from "./Todo";
import { MyContext } from "./App";

const Todos = () => {
  const {todos} = MyContext();
  return (
    <div>
      {todos.map((todo) => (
        <Todo {...todo} key={todo.id}/>
      ))}
    </div>
  );
};

export default Todos;
