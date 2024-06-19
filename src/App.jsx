import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TaskCard from './components/TaskCard'
import './App.css'

function App() {
  const [taskStates, setTaskStates] = useState(['todo', 'doing', 'done']);

  const [tasks, setTasks] = useState([
    { id: 1, text: 'Setup Git Repo', dueDate: '2024-06-18', blocked: false, status: 'done' },
    { id: 2, text: 'Setup Dev Environment', dueDate: '2024-07-02', blocked: false, status: 'doing' },
    { id: 3, text: 'Write Code', dueDate: '2024-07-03', blocked: false, status: 'done' },
    { id: 4, text: 'Write Tests', dueDate: '2024-07-04', blocked: true, status: 'todo' },
    { id: 5, text: 'Identify testing framework', dueDate: '2024-07-03', blocked: false, status: 'doing' },
  ]);

  return (
    <>
      <Header/>
      <div className="board">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}/>
        ))}
      </div>
      <Footer/>
    </>
  )
}

export default App
