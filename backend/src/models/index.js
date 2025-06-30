const { sequelize } = require('../config/database');
const Todo = require('./Todo');

module.exports = {
  sequelize,
  Todo
};
