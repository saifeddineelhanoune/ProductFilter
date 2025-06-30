const Todo = require('../models/Todo');

// Get all todos
exports.getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    });
    
    return res.status(200).json({
      success: true,
      count: todos.length,
      data: todos
    });
  } catch (error) {
    next(error);
  }
};

// Get a single todo
exports.getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }
    
    return res.status(200).json({
      success: true,
      data: todo
    });
  } catch (error) {
    next(error);
  }
};

// Create a new todo
exports.createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);
    
    return res.status(201).json({
      success: true,
      data: todo
    });
  } catch (error) {
    next(error);
  }
};

// Update a todo
exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }
    
    await todo.update(req.body);
    
    return res.status(200).json({
      success: true,
      data: todo
    });
  } catch (error) {
    next(error);
  }
};

// Delete a todo
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }
    
    await todo.destroy();
    
    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};
