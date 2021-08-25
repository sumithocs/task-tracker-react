import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react"

function App() {
  
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1
    //console.log(id)
    //return
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])    
  }

  const deleteTask = (id) => {
    //console.log('delete task', id);
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const toggleTask = (id) => {
    console.log('toggle task reminder', id);  
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))  
  }
  
  return (
    <div className="container"> 
      <Header title={'Task Tracker App'} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} /> 
      {/*Show Add Task ternary*/}
      {showAddTask && <AddTask onAdd={addTask} />} 
      {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}/> : 'No Tasks To Show'}      
    </div>
  );
}

export default App;
