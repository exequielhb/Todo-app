import { useState } from "react";
import Tasks from "./Tasks";
import { v4 as uuidv4 } from "uuid";

const TaskList = () => {
  const [task, setTask] = useState([]);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  // ----------------------------

  const addTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: uuidv4().slice(0, 5),
      text: input,
      completed: false,
    };
    if (newTask.text.trim()) {
      newTask.text = newTask.text.trim();
    }
    const updateTasks = [newTask, ...task];
    setTask(updateTasks);
    event.target.reset();
  };

  // ----------------------------

  const deleteTask = (id) => {
    const updateTasks = task.filter((task) => task.id !== id);
    setTask(updateTasks);
  };

  // ----------------------------

  const completeTask = (id) => {
    const updateTasks = task.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTask(updateTasks);
  };

  // ----------------------------

  return (
    <div>
      <form onSubmit={addTask}>
        <input
          type="text"
          name="text"
          onChange={handleChange}
          maxLength="45"
          placeholder="Enviar Tarea..."
        />
        <button type="submit" className="agregar">Agregar</button>
      </form>
      <div className="task">
        {task.map((task) => {
          return (
            <Tasks
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
