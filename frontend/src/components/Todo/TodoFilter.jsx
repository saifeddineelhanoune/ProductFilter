import React from 'react';
import { ButtonGroup, Button, Badge } from 'react-bootstrap';

const TodoFilter = ({ filter, setFilter, count }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
      <div>
        <h6 className="mb-0" style={{ 
          fontWeight: '600', 
          color: '#495057',
          fontSize: '0.95rem'
        }}>Filter:</h6>
      </div>
      <ButtonGroup style={{ 
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        borderRadius: '0.5rem',
        overflow: 'hidden'
      }}>
        <Button
          variant={filter === 'all' ? 'primary' : 'outline-primary'}
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
          style={{ 
            padding: '0.5rem 1rem',
            transition: 'all 0.2s ease',
            fontWeight: '500',
            borderColor: filter === 'all' ? '#007bff' : '#dee2e6'
          }}
        >
          All <Badge bg={filter === 'all' ? 'light' : 'secondary'} 
                text={filter === 'all' ? 'primary' : 'light'}
                style={{ 
                  marginLeft: '0.3rem',
                  borderRadius: '50%',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>{count.all}</Badge>
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'outline-primary'}
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
          style={{ 
            padding: '0.5rem 1rem',
            transition: 'all 0.2s ease',
            fontWeight: '500',
            borderColor: filter === 'active' ? '#007bff' : '#dee2e6'
          }}
        >
          Active <Badge bg={filter === 'active' ? 'light' : 'secondary'} 
                   text={filter === 'active' ? 'primary' : 'light'}
                   style={{ 
                     marginLeft: '0.3rem',
                     borderRadius: '50%',
                     padding: '0.25rem 0.5rem',
                     fontSize: '0.75rem',
                     fontWeight: '600'
                   }}>{count.active}</Badge>
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'outline-primary'}
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
          style={{ 
            padding: '0.5rem 1rem',
            transition: 'all 0.2s ease',
            fontWeight: '500',
            borderColor: filter === 'completed' ? '#007bff' : '#dee2e6'
          }}
        >
          Completed <Badge bg={filter === 'completed' ? 'light' : 'secondary'} 
                      text={filter === 'completed' ? 'primary' : 'light'}
                      style={{ 
                        marginLeft: '0.3rem',
                        borderRadius: '50%',
                        padding: '0.25rem 0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>{count.completed}</Badge>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default TodoFilter;
