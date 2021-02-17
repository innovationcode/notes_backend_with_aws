const environment = process.env.NODE_ENV || 'development';
console.log( 'we got env ' );
const knex = require('knex');

const knexConfig = require('../knexfile.js');

const environmentConfig = knexConfig[environment]
console.log( 'we got env ' );
const connection = knex(environmentConfig)

console.log(connection)
console.log(connection.toString)


//module.exports = knex(knexConfig.development);

module.exports = connection;