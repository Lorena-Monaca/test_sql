
// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',      
  password: 'admin1234',      
  database: 'clinica'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar: ' + err.message);
    return;
  }
  console.log('Conectado a la base de datos como id ' + connection.threadId);
});

module.exports = connection;
