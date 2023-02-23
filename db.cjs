const { Pool } = require('pg');

const pool = new Pool({
	user: 'fish_usernew',
	database: 'fishnew',
	password: '123456',
	port: 5432,
	host: 'localhost',
});

module.exports = { pool };

// https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-node-js-on-ubuntu-20-04
