const Cliente = require('../models/Cliente');
const Reserva = require('../models/Reserva');

let tempClienteId = null;
let tempQuarto = null;

exports.showCadastroCliente = (req, res) => {
    res.render('cadastrocliente');
};

exports.cadastrarCliente = (req, res) => {
    Cliente.create(req.body, (err, result) => {
        if (err) throw err;
        tempClienteId = result.insertId;
        res.render('escolhaquarto', { cliente_id: tempClienteId });
    });
};

exports.escolherQuarto = (req, res) => {
    tempQuarto = req.body.quarto;
    res.render('dadosreserva', { cliente_id: req.body.cliente_id, quarto: tempQuarto });
};

exports.salvarReserva = (req, res) => {
    const reserva = {
        cliente_id: req.body.cliente_id,
        quarto: req.body.quarto,
        data_entrada: req.body.data_entrada,
        data_saida: req.body.data_saida
    };
    Reserva.create(reserva, (err, result) => {
        if (err) throw err;
        res.render('confirmacao', reserva);
    });
};
