const mysql = require('mysql');

const obj = {
	host: 'localhost',
	user: 'root',
	password: 'user',
	database: 'todo'
};

module.exports = mysql.createConnection(obj);
