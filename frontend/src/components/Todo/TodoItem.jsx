import React, { useState } from 'react';
import { ListGroup, Badge, Button, Form, Modal } from 'react-bootstrap';
import { FaTrash, FaCheck, FaUndo, FaPencilAlt } from 'react-icons/fa';

const TodoItem = ({ todo, toggleTodoStatus, deleteTodo, updateTodo }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description || '');
  const [editPriority, setEditPriority] = useState(todo.priority);
  const [editDueDate, setEditDueDate] = useState(
    todo.dueDate ? new Date(todo.dueDate).toISOString().split('T')[0] : ''
  );

  const handleEdit = () => {
    updateTodo(todo.id, {
      title: editTitle,
      description: editDescription,
      priority: editPriority,
      dueDate: editDueDate ? new Date(editDueDate) : null,
      completed: todo.completed
    });
    setShowEditModal(false);
  };

  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return '';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return '#dc3545'; // danger/red
      case 'medium':
        return '#fd7e14'; // warning/orange
      case 'low':
        return '#20c997'; // teal
      default:
        return '#6c757d'; // secondary/gray
    }
  };

  const getBadgeColor = (priority) => {
    switch (priority) {
      case 'high':
        return '#dc3545'; // danger/red
      case 'medium':
        return '#fd7e14'; // warning/orange
      case 'low':
        return '#20c997'; // teal
      default:
        return '#6c757d'; // secondary/gray
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <>
      <ListGroup.Item 
        className={`todo-item d-flex justify-content-between align-items-center ${todo.completed ? 'completed' : ''}`}
        style={{
          padding: '1rem 1.25rem',
          transition: 'all 0.2s ease',
          borderLeft: `4px solid ${todo.completed ? '#28a745' : getPriorityColor(todo.priority)}`,
          backgroundColor: todo.completed ? 'rgba(40, 167, 69, 0.05)' : 'white',
        }}
      >
        <div className="d-flex align-items-center">
          <Button 
            variant={todo.completed ? "success" : "outline-secondary"}
            size="sm"
            className="me-3"
            style={{ 
              borderRadius: '50%', 
              width: '2.2rem', 
              height: '2.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              transition: 'all 0.2s ease'
            }}
            onClick={() => toggleTodoStatus(todo.id)}
          >
            {todo.completed ? <FaUndo /> : <FaCheck />}
          </Button>
          
          <div>
            <div className="d-flex align-items-center mb-1">
              <span 
                className={`todo-title ${todo.completed ? 'completed' : ''}`}
                style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '500',
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#6c757d' : '#212529',
                  transition: 'all 0.2s ease'
                }}
              >
                {todo.title}
              </span>
              <Badge 
                className={`ms-2 priority-badge`}
                style={{
                  backgroundColor: getBadgeColor(todo.priority),
                  color: 'white',
                  padding: '0.35em 0.65em',
                  borderRadius: '12px',
                  fontWeight: '500',
                  textTransform: 'capitalize',
                  fontSize: '0.75rem'
                }}
              >
                {todo.priority}
              </Badge>
            </div>
            
            {todo.description && (
              <p className="text-muted mb-1 small" style={{ 
                marginLeft: '0.1rem',
                lineHeight: '1.4',
                maxWidth: '90%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical'
              }}>
                {todo.description}
              </p>
            )}
            
            {todo.dueDate && (
              <small className="text-muted" style={{
                display: 'inline-block',
                marginLeft: '0.1rem',
                padding: '0.2rem 0.5rem',
                backgroundColor: 'rgba(108, 117, 125, 0.1)',
                borderRadius: '12px',
                fontSize: '0.75rem'
              }}>
                Due: {formatDate(todo.dueDate)}
              </small>
            )}
          </div>
        </div>
        
        <div>
          <Button 
            variant="outline-primary" 
            size="sm" 
            className="me-2"
            style={{ 
              borderRadius: '50%', 
              width: '2rem', 
              height: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              transition: 'all 0.2s ease'
            }}
            onClick={() => setShowEditModal(true)}
          >
            <FaPencilAlt />
          </Button>
          <Button 
            variant="outline-danger" 
            size="sm"
            style={{ 
              borderRadius: '50%', 
              width: '2rem', 
              height: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              transition: 'all 0.2s ease'
            }}
            onClick={() => deleteTodo(todo.id)}
          >
            <FaTrash />
          </Button>
        </div>
      </ListGroup.Item>

      {/* Edit Modal */}
      <Modal 
        show={showEditModal} 
        onHide={() => setShowEditModal(false)}
        centered
        backdrop="static"
        dialogClassName="modal-dialog-centered"
      >
        <Modal.Header closeButton style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <Modal.Title style={{ fontSize: '1.3rem', fontWeight: '600' }}>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: '1.5rem' }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '500' }}>Title</Form.Label>
              <Form.Control
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                required
                style={{ 
                  padding: '0.65rem 1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(0,0,0,0.1)'
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '500' }}>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                style={{ 
                  padding: '0.65rem 1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(0,0,0,0.1)',
                  minHeight: '100px'
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '500' }}>Priority</Form.Label>
              <Form.Select
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value)}
                style={{ 
                  padding: '0.65rem 1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(0,0,0,0.1)'
                }}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '500' }}>Due Date</Form.Label>
              <Form.Control
                type="date"
                value={editDueDate}
                onChange={(e) => setEditDueDate(e.target.value)}
                style={{ 
                  padding: '0.65rem 1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(0,0,0,0.1)'
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ borderTop: '1px solid rgba(0,0,0,0.05)', padding: '1rem 1.5rem' }}>
          <Button 
            variant="outline-secondary" 
            onClick={() => setShowEditModal(false)}
            style={{ 
              borderRadius: '0.5rem',
              padding: '0.5rem 1.25rem' 
            }}
          >
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={handleEdit}
            style={{ 
              borderRadius: '0.5rem',
              padding: '0.5rem 1.25rem',
              backgroundColor: '#007bff',
              boxShadow: '0 2px 5px rgba(0,123,255,0.3)'
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TodoItem;
