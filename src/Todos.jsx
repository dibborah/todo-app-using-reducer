import Todo from "./Todo";
import { useTodos } from "./contexts/TodosProvider";

const Todos = () => {
  const {todos} = useTodos();
  return (
    <div>
      {todos.map((todo) => (
        <Todo {...todo} key={todo.id}/>
      ))}
    </div>
  );
};

export default Todos;
