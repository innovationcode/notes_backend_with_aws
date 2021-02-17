// Update with your config settings.
require('dotenv').config();
const pg = require('pg');

module.exports = {
  development: {
    client: 'pg',

    connection: 'postgres://postgres:notes-db-password@database-notes.cfwpbdz2tkh3.us-east-1.rds.amazonaws.com/notes_db?ssl=true', 
      
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
    connection: 'database-notes.cfwpbdz2tkh3.us-east-1.rds.amazonaws.com',
 
   
    migrations: {
        directory: './database/migrations',
        tableName: 'dbmigrations',
    },

    seeds: {
        directory: './database/seeds' 
    },
  }
};