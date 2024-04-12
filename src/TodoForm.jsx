const TodoForm = () => {
  const handleAddTodo = () => {};
  return (
    <div>
      <form>
        <input type="text" id="todoList" />
        <button onClick={handleAddTodo}>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
