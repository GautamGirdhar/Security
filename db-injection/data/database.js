const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  database: 'security',
  user: 'root',
  password: 'G@ut@m@10122004'
})

module.exports = pool;