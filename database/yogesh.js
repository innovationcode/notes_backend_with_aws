var pg = require("pg");

//const knex = require('knex');



var client = new pg.Client({
  
 // port: 5432,
 host:      'database-notes.cfwpbdz2tkh3.us-east-1.rds.amazonaws.com',
  //'database-notesdatabase-notes.cfwpbdz2tkh3.us-east-1.rds.amazonaws.com' ,
database: 'notes_db',
user: 'postgres',
password: 'notes-db-password'
  
});

//client.connect();

client.connect(err => {
      if (err) {
        console.error('connection error', err.stack)
      } else {
        console.log('connected')
      }
    })


/*
var query = client.query('CREATE TABLE people(id SERIAL PRIMARY KEY, name VARCHAR(100) not null)');

query.on('row', function(row) {
  console.log(row.name);
});

query.on('end', client.end.bind(client));

*/