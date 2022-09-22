import TaskList from "./components/TaskList";
import "./app.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Todo App</title>
        </Helmet>
        <h1>Todo App</h1>
        <TaskList />
      </div>
    </>
  );
}

export default App;
