import Todos from "./Todos";
import AddTodoForm from "./AddTodoForm";
import TodosProvider from "./contexts/TodosProvider";
import MyPortalComponent from "./MyPortalComponent";

function App() {
  return (
    <TodosProvider>
      <h2>App component</h2>
      {
        //   <AddTodoForm />
        // <Todos />
      }
      <MyPortalComponent />
    </TodosProvider>
  );
}

export default App;
