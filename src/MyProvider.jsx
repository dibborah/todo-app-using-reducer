import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();

const reducer = (todos, action) => {
  if (action.type === "DELETE_TODO") {
    return todos.filter((todo) => todo.id !== action.payload.id);
  } else if (action.type === "ADD_TODO") {
    return [...todos, action.payload.newTodo];
  } else if (action.type === "TOGGLE_COMPLETED") {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }
  return todos;
};

const initialTodos = [
  { id: "1", title: "React by CodProg.com", completed: true },
  { id: "2", title: "React Project Libraries", completed: false },
  { id: "3", title: "Practicing coding", completed: true },
];

const MyProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default MyProvider;

export const MyContext = () => {
    return useContext(TodoContext);
  };
  