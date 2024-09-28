import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos'; // Mock API URL for testing purposes

const TaskService = {
  getTasks: () => axios.get(`${API_URL}?_limit=10`), // Fetch first 10 tasks for testing
  addTask: (task) => axios.post(API_URL, task),
  editTask: (task) => axios.put(`${API_URL}/${task.id}`, task),
  deleteTask: (id) => axios.delete(`${API_URL}/${id}`),
};

export default TaskService;
