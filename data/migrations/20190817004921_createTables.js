exports.up = function(knex) {
    return knex.schema
      .createTable('users', tbl => {
          tbl.increments
          tbl.string('username').unique()
          tbl.string('email').notNullable().unique()
          tbl.string('password').notNullable()
      })
      .createTable('wordlists', tbl => {
          tbl.increments
          tbl.string('name').notNullable()
      })
      .createTable('words', tbl => {
          tbl.increments
          tbl.string('word').notNullable()
      })
      .createTable('wordlist-word', tbl => {
          tbl.increments
          tbl.integer('wordlistId').references('wordlists.id').unsigned().notNullable()
          tbl.integer('wordId').references('words.id').unsigned().notNullable()
      })
      .createTable('highscores', tbl => {
          tbl.increments
          tbl.integer('wordlistId').references('wordlists.id').unsigned().notNullable()
          tbl.integer('userId').references('users.id').unsigned().notNullable()
          tbl.integer('score').unsigned().notNullable()
      })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
  };