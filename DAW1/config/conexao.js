const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',        // ou o IP do servidor MySQL
    user: 'root',             // seu usuário do MySQL
    password: '',             // sua senha do MySQL
    database: 'nome_do_banco' // nome do banco que você criou (exemplo: hotel_db)
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados MySQL!');
    }
});

module.exports = db;
