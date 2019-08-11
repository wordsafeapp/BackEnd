
exports.up = function(knex) {
  return knex.schema.createTable('wordlists', (tbl) => {
    tbl.increments('id')
    tbl.text('name', 128).unique().notNullable()
    tbl.string('words').notNullable()
    tbl.integer('highscores')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('wordlists')
};
