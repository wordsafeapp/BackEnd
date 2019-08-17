module.exports = {
  client:'sqlite3',
  connection: {
    filename: './data/wordsafe.db3'
  },
  useNullAsDefault: true,
  migrations: {
    directory: './data/migration'
  },
  seeds: {
    directory: './data/seeds'
  },
  development:  {
    client:'sqlite3',
    connection: {
      filename: './data/wordsafe.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
}
