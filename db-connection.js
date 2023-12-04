const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const dbConnection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: 'famarket_wp', // db donde esta tabla articulos
  connectTimeout: 20000
});

dbConnection.connect((error) => {
  if (error) {
    console.error('Error de conexión:', error.message);
  } else {
    console.log('Conexión a la base de datos establecida');
  }
});

module.exports = dbConnection;
