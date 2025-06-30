import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import TodoForm from '../components/Todo/TodoForm';
import TodoList from '../components/Todo/TodoList';
import TodoFilter from '../components/Todo/TodoFilter';

function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/todos`);
      setTodos(response.data.data);
      setError(null);
    } catch (err) {
      setError('Error fetching todos. Please try again later.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todo) => {
    try {
      const response = await axios.post(`${API_URL}/todos`, todo);
      setTodos([response.data.data, ...todos]);
    } catch (err) {
      setError('Error adding todo. Please try again.');
      console.error('Error adding todo:', err);
    }
  };

  const toggleTodoStatus = async (id) => {
    try {
      const todo = todos.find(todo => todo.id === id);
      const updatedTodo = { ...todo, completed: !todo.completed };
      
      await axios.put(`${API_URL}/todos/${id}`, updatedTodo);
      
      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ));
    } catch (err) {
      setError('Error updating todo. Please try again.');
      console.error('Error updating todo:', err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError('Error deleting todo. Please try again.');
      console.error('Error deleting todo:', err);
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await axios.put(`${API_URL}/todos/${id}`, updatedTodo);
      setTodos(todos.map(todo => 
        todo.id === id ? response.data.data : todo
      ));
    } catch (err) {
      setError('Error updating todo. Please try again.');
      console.error('Error updating todo:', err);
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <Container className="py-5" style={{ width: '100%', height: '100%' }}>
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <Card className="shadow-lg rounded-3 border-0" 
                style={{ 
                  background: 'linear-gradient(145deg, #ffffff, #f5f7fa)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                }}>
            <Card.Body className="p-4">
              <h1 className="text-center mb-4" style={{ 
                color: '#3a3a3a', 
                fontWeight: '600',
                letterSpacing: '-0.5px' 
              }}>Todo List</h1>
              {error && <div className="alert alert-danger rounded-pill">{error}</div>}
              
              <TodoForm addTodo={addTodo} />
              
              <TodoFilter 
                filter={filter} 
                setFilter={setFilter} 
                count={{
                  all: todos.length,
                  active: todos.filter(t => !t.completed).length,
                  completed: todos.filter(t => t.completed).length
                }}
              />
              
              {loading ? (
                <div className="text-center my-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <TodoList 
                  todos={filteredTodos}
                  toggleTodoStatus={toggleTodoStatus}
                  deleteTodo={deleteTodo}
                  updateTodo={updateTodo}
                />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;