const TodoForm = ({ todoReducer }) => {
  const handleAddTodo = (e) => {
  e.preventDefault();
  // todoReducer(data);
  };
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input type="text" id="todoList" />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
