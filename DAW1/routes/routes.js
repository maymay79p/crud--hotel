import express from 'express';
const router = express.Router();

import {
    abreAddCliente,
    addCliente,
    listarCliente,
    abreEditCliente,
    editCliente,
    deletarCliente,
    filtrarCliente,

    abreAddContrato,
    addContrato,
    listarContrato,
    abreEditContrato,
    editContrato,
    deletarContrato,
    filtrarContrato,

    abreAddTipQuarto,
    addTipQuarto,
    listarTipQuarto,
    abreEditTipQuarto,
    editTipQuarto,
    deletarTipQuarto,
    filtrarTipQuarto,

    abreAddQuarto,
    addQuarto,
    listarQuarto,
    abreEditQuarto,
    editQuarto,
    deletarQuarto,
    filtrarQuarto,

    abreAddServico,
    addServico,
    listarServico,
    abreEditServico,
    editServico,
    deletarServico,
    filtrarServico,
    
    abreAddExtra,
    addExtra,
    listarExtra,
    filtrarExtra,
    abreEditExtra,
    editExtra,
    deletarExtra,

    abreAddFixo,
    addFixo,
    listarFixo,
    filtrarFixo,
    abreEditFixo,
    editFixo,
    deletarFixo,

    abreConfirmacao
} from '../controllers/controllers.js'; 

// Página inicial
router.get('/', (req, res) => {
    res.render('telainicial');
});

//Cliente
router.get('/cliente/add', abreAddCliente);
router.post('/cliente/add', addCliente);
router.get('/cliente/lst', listarCliente);
router.post('/cliente/lst', filtrarCliente);
router.get('/cliente/edit/:id', abreEditCliente);
router.post('/cliente/update/:id', editCliente);
router.post('/cliente/delete/:id', deletarCliente);

//Contrato
router.get('/contrato/add', abreAddContrato);
router.post('/contrato/add', addContrato);
router.get('/contrato/lst', listarContrato);
router.post('/contrato/lst', filtrarContrato);
router.get('/contrato/edit/:id', abreEditContrato);
router.post('/contrato/update/:id', editContrato);
router.post('/contrato/delete/:id', deletarContrato);

//TipQuarto
router.get('/tipquarto/add', abreAddTipQuarto);
router.post('/tipquarto/add', addTipQuarto);
router.get('/tipquarto/lst', listarTipQuarto);
router.post('/tipquarto/lst', filtrarTipQuarto);
router.get('/tipquarto/edit/:id', abreEditTipQuarto);
router.post('/tipquarto/update/:id', editTipQuarto);
router.post('/tipquarto/delete/:id', deletarTipQuarto);

//Quarto
router.get('/quarto/add', abreAddQuarto);
router.post('/quarto/add', addQuarto);
router.get('/quarto/lst', listarQuarto);
router.post('/quarto/lst', filtrarQuarto);
router.get('/quarto/edit/:id', abreEditQuarto);
router.post('/quarto/update/:id', editQuarto);
router.post('/quarto/delete/:id', deletarQuarto);

//Serviço
router.get('/servico/add', abreAddServico);
router.post('/servico/add', addServico);
router.get('/servico/lst', listarServico);
router.post('/servico/lst', filtrarServico);
router.get('/servico/edit/:id', abreEditServico);
router.post('/servico/update/:id', editServico);
router.post('/servico/delete/:id', deletarServico);

//Extra
router.get('/extra/add', abreAddExtra);
router.post('/extra/add', addExtra);
router.get('/extra/lst', listarExtra);
router.post('/extra/lst', filtrarExtra);
router.get('/extra/edit/:id', abreEditExtra);
router.post('/extra/update/:id', editExtra);
router.post('/extra/delete/:id', deletarExtra);

//Fixo
router.get('/fixo/add', abreAddFixo);
router.post('/fixo/add', addFixo);
router.get('/fixo/lst', listarFixo);
router.post('/fixo/lst', filtrarFixo);
router.get('/fixo/edit/:id', abreEditFixo);
router.post('/fixo/update/:id', editFixo);
router.post('/fixo/delete/:id', deletarFixo);

//Confirmção
router.get('/contrato/ok', abreConfirmacao);

export default router;
