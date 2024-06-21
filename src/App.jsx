import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import KanbanPage from './pages/KanbanPage'
import TaskDetailPage from './pages/TaskDetailPage'
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
    { id: 2, text: 'Setup Dev Environment', dueDate: '2024-06-20', blocked: false, status: 'doing' },
    { id: 3, text: 'Write Code', dueDate: '2024-07-03', blocked: false, status: 'done' },
    { id: 4, text: 'Write Tests', dueDate: '2024-07-04', blocked: true, status: 'todo' },
    { id: 5, text: 'Identify testing framework', dueDate: '2024-07-03', blocked: false, status: 'doing' },
  ];
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = ({ _task }) => {
    const newTaskId = tasks.length + 1;

    setTasks([
      ...tasks,
      {
        ..._task,
        id: newTaskId,
      }
    ]);

    return newTaskId;
  }

  const updateTask = ({ _task }) => {
    if (!tasks.find((task) => task.id === _task.id)) {
      return false;
    }

    setTasks(tasks.map((task) => {
      if (task.id === _task.id) {
        return _task;
      }

      return task;
    }));

    return _task.id;
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
            path="/tasks/:taskId" 
            element={
              <TaskDetailPage 
                updateTaskHandler={updateTask} 
                tasks={tasks}
                taskStates={taskStates}
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
                taskStates={taskStates} 
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
