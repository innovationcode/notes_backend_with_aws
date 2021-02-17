// Update with your config settings.
require('dotenv').config();
const pg = require('pg');

module.exports = {
  development: {
    client: 'pg',

    connection: 'postgres://localhost/notes_db', 
      
    migrations: {
        directory: './database/migrations',
        tableName: 'dbmigrations'
    },

    seeds: {
        directory: './database/seeds' 
    },
  },

  production: {
    client: 'pg',

    connection: process.env.DATABASE_URI,
 
   
    migrations: {
        directory: './database/migrations',
        tableName: 'dbmigrations',
    },

    seeds: {
        directory: './database/seeds' 
    },
  }
};