import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) return;

    addTodo({
      title,
      description,
      priority,
      dueDate: dueDate ? new Date(dueDate) : null,
      completed: false
    });

    // Reset form
    setTitle('');
    setDescription('');
    setPriority('medium');
    setDueDate('');
  };

  return (
    <div className="mb-4 p-4" style={{ 
      backgroundColor: 'rgba(248, 249, 250, 0.7)',
      borderRadius: '1rem',
      boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.05)'
    }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label style={{ fontWeight: '500', color: '#495057' }}>
            Title
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter todo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ 
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              border: '1px solid rgba(0,0,0,0.1)',
              boxShadow: 'none',
              transition: 'all 0.2s ease'
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ fontWeight: '500', color: '#495057' }}>
            Description (optional)
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ 
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              border: '1px solid rgba(0,0,0,0.1)',
              boxShadow: 'none',
              minHeight: '80px',
              transition: 'all 0.2s ease'
            }}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label style={{ fontWeight: '500', color: '#495057' }}>
                Priority
              </Form.Label>
              <Form.Select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                style={{ 
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(0,0,0,0.1)',
                  boxShadow: 'none',
                  transition: 'all 0.2s ease',
                  backgroundPosition: 'right 1rem center'
                }}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label style={{ fontWeight: '500', color: '#495057' }}>
                Due Date (optional)
              </Form.Label>
              <Form.Control
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                style={{ 
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(0,0,0,0.1)',
                  boxShadow: 'none',
                  transition: 'all 0.2s ease'
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button 
          variant="primary" 
          type="submit" 
          className="w-100"
          style={{
            padding: '0.75rem',
            borderRadius: '0.5rem',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            boxShadow: '0 4px 10px rgba(0, 123, 255, 0.25)',
            transition: 'all 0.3s ease'
          }}
        >
          Add Todo
        </Button>
      </Form>
    </div>
  );
};

export default TodoForm;
