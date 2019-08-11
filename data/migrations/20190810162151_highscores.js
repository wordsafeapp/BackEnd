
exports.up = function(knex) {
  return knex.schema.createTable('highscores', (tbl) => {
    tbl.increments('id')
    tbl.text('username', 128).notNullable()
    tbl.string('wordlist').notNullable()
    tbl.integer('score').notNullable()
    tbl.integer('rank').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('highscores')
};
