//conexion con la base de datos
const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Camiloruiz123@",
    database:"Nike"
})
module.exports = conexion;
// Prueba la conexión
conexion.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error.stack);
    return;
  }
  console.log('Conexión exitosa' + conexion.threadId + '');
});