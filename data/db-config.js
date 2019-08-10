const knex = require('knex')({'../knexfile.js'})

const db = knex(config.development)

module.exports = db
