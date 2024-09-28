import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskService from './services/TaskService';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    TaskService.getTasks().then((response) => {
      setTasks(response.data);
    });
  }, []);

  const addTask = (taskName) => {
    TaskService.addTask({ name: taskName }).then((response) => {
      setTasks([...tasks, response.data]);
    });
  };

  const editTask = (task) => {
    TaskService.editTask(task).then(() => {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
      setTaskToEdit(null);
    });
  };

  const deleteTask = (id) => {
    TaskService.deleteTask(id).then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    });
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
      <TaskList tasks={tasks} onEdit={setTaskToEdit} onDelete={deleteTask} />
    </div>
  );
};

export default App;
