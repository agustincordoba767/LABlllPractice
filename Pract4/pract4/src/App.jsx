import { useState } from 'react'
import './App.css'
import { TASKS } from './data/Data';
import Newtask from './components/newTask/Newtask';
import Tasks from './components/tasks/Tasks';

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const addNewTask = (onHandleAddNewTask) => {
    
  }
  return (
    <>
      <Newtask></Newtask>
      <Tasks
        tareas={tasks}
      ></Tasks>
    </>
  )
}

export default App
