const Sequelize = require('sequelize');
const db = require('../database/db.js');

module.exports = db.define(
  'user',
  {
    firstName: {
     type: Sequelize.STRING, allowNull: false 
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    }
  },
  {
    timestamps: false,
  }
);
