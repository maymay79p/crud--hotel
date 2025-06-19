import conexao from '../config/conexao.js';
const Cliente = {
    create: (dados, callback) => {
        const sql = 'INSERT INTO cliente (nome, cpf, telefone) VALUES (?, ?, ?)';
        db.query(sql, [dados.nome, dados.cpf, dados.telefone], callback);
    }
};

module.exports = Cliente;
