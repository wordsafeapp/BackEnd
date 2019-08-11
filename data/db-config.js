const knex = require('knex')(require('../knexfile.js').development);

const db = knex(knex);

module.exports = db;
