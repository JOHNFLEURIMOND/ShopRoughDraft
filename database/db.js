const Sequelize = require('sequelize');

module.exports =  new Sequelize('shop', 'postgres', 'GetBetter88', {
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',

  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});


