const db = require('../config/conexao');

const Reserva = {
    create: (dados, callback) => {
        const sql = 'INSERT INTO reserva (cliente_id, quarto, data_entrada, data_saida) VALUES (?, ?, ?, ?)';
        db.query(sql, [dados.cliente_id, dados.quarto, dados.data_entrada, dados.data_saida], callback);
    }
};

module.exports = Reserva;
