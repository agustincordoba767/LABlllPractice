import { useState } from "react";
import "./App.css";
import Task from "./components/task/Task";
import { listTask } from "./data/Data";
import NewTask from "./components/newTask/NewTask";

function App() {
  const [tasks, setTask] = useState(listTask);
  const [counter, setCounter] = useState(tasks.length);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const addNewTask = (onHandleAddNewTask) => {
    incrementCounter();
    const taskData = {
      id: counter,
      name: onHandleAddNewTask,
      complete: false,
    };
    setTask((prevTasks) => [...prevTasks, taskData]);
  };
  const deleteTask = (id) => {
    const updateTask = tasks.filter((task) => task.id !== id);
    setTask(updateTask);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, complete: !task.complete };
      }
      return task;
    });
    setTask(updatedTasks);
  };

  return (
    <div className="task-conteiner">
      <NewTask onHandleAddNewTask={addNewTask} />

      <Task tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
    </div>
  );
}

export default App;
