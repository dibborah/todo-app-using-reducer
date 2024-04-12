import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo {...todo} key={todo.id} />
      ))}
    </div>
  );
};

export default Todos;
