import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit }) => {
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
    } else {
      setTaskName('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      editTask({ ...taskToEdit, name: taskName });
    } else {
      addTask(taskName);
    }
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      <button type="submit">{taskToEdit ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;
