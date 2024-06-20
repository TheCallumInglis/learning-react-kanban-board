import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import KanbanPage from './pages/KanbanPage'
import NewTaskPage from './pages/NewTaskPage'
import TasksPage from './pages/TasksPage'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Column from './components/Column'
import './App.css'

function App() {
  const [taskStates, setTaskStates] = useState(['todo', 'doing', 'done']);

  const initialTasks = [
    { id: 1, text: 'Setup Git Repo', dueDate: '2024-06-18', blocked: false, status: 'done' },
    { id: 2, text: 'Setup Dev Environment', dueDate: '2024-07-02', blocked: false, status: 'doing' },
    { id: 3, text: 'Write Code', dueDate: '2024-07-03', blocked: false, status: 'done' },
    { id: 4, text: 'Write Tests', dueDate: '2024-07-04', blocked: true, status: 'todo' },
    { id: 5, text: 'Identify testing framework', dueDate: '2024-07-03', blocked: false, status: 'doing' },
  ];
  const [tasks, setTasks] = useState(initialTasks);

  const emptyNewTask = { id: null, text: '', dueDate: '', blocked: false, status: 'todo' };
  const [newTask, setNewTask] = useState(emptyNewTask);

  const handleTaskChange = (event) => {
    const {
      target: { name, value }
    } = event;

    setNewTask({ 
      ...newTask, 
      [name]: value,
    });
  }

  const addTask = (event) => {
    event.preventDefault();

    if (!newTask.text || !newTask.dueDate) {
      alert('Please enter a task and due date');
      return;
    }

    if (newTask.status === '') {
      setNewTask({ ...newTask, status: 'todo' });
    }

    setTasks([
      ...tasks,
      {
        ...newTask,
        id: tasks.length + 1,
      }
    ]);

    setNewTask(emptyNewTask);
  }

  const toggleBlockedAction = (task) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, blocked: !t.blocked };
      }

      return t;
    });

    setTasks(updatedTasks);
  }

  const changeTaskStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <>
    <Router>
      <Nav/>
      <main>
        <Routes>
          <Route 
            path="/"
            element={
              <KanbanPage 
                taskStates={taskStates}
                tasks={tasks}
                toggleBlockedAction={toggleBlockedAction}
                changeTaskStatus={changeTaskStatus}
              />
            } 
          />

          <Route 
            path="/tasks" 
            element={
              <TasksPage 
                taskStates={taskStates}
                tasks={tasks}
              />
            } 
          />

          <Route 
            path="/tasks/new" 
            element={
              <NewTaskPage 
                addTaskHandler={addTask} 
                taskChangeHandler={handleTaskChange} 
                taskStates={taskStates} 
                newTask={newTask} 
              />
            } 
          />

          <Route 
            path="/about"
            element={
              <AboutPage />
            } 
          />
        </Routes>
        <Footer/>
      </main>
    </Router>
    </>
  )
}

export default App
