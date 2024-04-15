import Todos from "./Todos";
import AddTodoForm from "./AddTodoForm";
import MyProvider from "./MyProvider";

function App() {
  return (
    <MyProvider>
      <AddTodoForm />
      <Todos />
    </MyProvider>
  );
}

export default App;
