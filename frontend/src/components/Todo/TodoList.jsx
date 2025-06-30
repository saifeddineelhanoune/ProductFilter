import React from 'react';
import { ListGroup, Badge, Button } from 'react-bootstrap';
import { FaTrash, FaCheck, FaUndo, FaPencilAlt } from 'react-icons/fa';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodoStatus, deleteTodo, updateTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center p-4 my-3" style={{ 
        background: 'rgba(248, 249, 250, 0.7)', 
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.05)'
      }}>
        <p className="mb-0" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
          No todos found. Add a new todo to get started!
        </p>
      </div>
    );
  }

  return (
    <ListGroup className="mt-3" style={{ 
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
    }}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodoStatus={toggleTodoStatus}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ListGroup>
  );
};

export default TodoList;
