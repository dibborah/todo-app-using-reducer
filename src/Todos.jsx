import Todo from "./Todo";
import { MyContext } from "./MyProvider";

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
