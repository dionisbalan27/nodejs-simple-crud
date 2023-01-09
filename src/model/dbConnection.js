const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs_db1'
});

exports.db = db;