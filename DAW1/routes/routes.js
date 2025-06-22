import express from 'express';
const router = express.Router();

import {
    abreAddCliente,
    addCliente,
    listarCliente,
    abreEditCliente,
    editCliente,
    deleteCliente,
    filtrarCliente,

    abreAddContrato,
    addContrato,
    listarContrato,
    abreEditContrato,
    editContrato,
    deleteContrato,
    filtrarContrato,

    abreAddTipquarto,
    addTipquarto,
    listarTipquarto,
    abreEditTipquarto,
    editTipquarto,
    deleteTipquarto,
    filtrarTipquarto,

    abreAddQuarto,
    addQuarto,
    listarQuarto,
    abreEditQuarto,
    editQuarto,
    deleteQuarto,
    filtrarQuarto,

    abreAddServico,
    addServico,
    listarServico,
    abreEditServico,
    editServico,
    deleteServico,
    filtrarServico,
    
    abreAddExtra,
    addExtra,
    listarExtra,
    filtrarExtra,
    abreEditExtra,
    editExtra,
    deleteExtra,

    abreAddFixo,
    addFixo,
    listarFixo,
    filtrarFixo,
    abreEditFixo,
    editFixo,
    deleteFixo
} from '../controllers/controllers.js';

// Página inicial
router.get('/', (req, res) => {
    res.render('telainicial');
});

// Cliente
router.get('/cliente/add', abreAddCliente);
router.post('/cliente/add', addCliente);
router.get('/cliente/lst', listarCliente);
router.post('/cliente/lst', filtrarCliente);
router.get('/cliente/edit/:id', abreEditCliente);
router.post('/cliente/update/:id', editCliente);
router.post('/cliente/delete/:id', deleteCliente);

// Contrato
router.get('/contrato/add', abreAddContrato);
router.post('/contrato/add', addContrato);
router.get('/contrato/lst', listarContrato);
router.post('/contrato/lst', filtrarContrato);
router.get('/contrato/edit/:id', abreEditContrato);
router.post('/contrato/update/:id', editContrato);
router.post('/contrato/delete/:id', deleteContrato);

// Tipquarto
router.get('/tipquarto/add', abreAddTipquarto);
router.post('/tipquarto/add', addTipquarto);
router.get('/tipquarto/lst', listarTipquarto);
router.post('/tipquarto/lst', filtrarTipquarto);
router.get('/tipquarto/edit/:id', abreEditTipquarto);
router.post('/tipquarto/update/:id', editTipquarto);
router.post('/tipquarto/delete/:id', deleteTipquarto);

// Quarto
router.get('/quarto/add', abreAddQuarto);
router.post('/quarto/add', addQuarto);
router.get('/quarto/lst', listarQuarto);
router.post('/quarto/lst', filtrarQuarto);
router.get('/quarto/edit/:id', abreEditQuarto);
router.post('/quarto/update/:id', editQuarto);
router.post('/quarto/delete/:id', deleteQuarto);

// Serviço
router.get('/servico/add', abreAddServico);
router.post('/servico/add', addServico);
router.get('/servico/lst', listarServico);
router.post('/servico/lst', filtrarServico);
router.get('/servico/edit/:id', abreEditServico);
router.post('/servico/update/:id', editServico);
router.post('/servico/delete/:id', deleteServico);

// Extra
router.get('/extra/add', abreAddExtra);
router.post('/extra/add', addExtra);
router.get('/extra/lst', listarExtra);
router.post('/extra/lst', filtrarExtra);
router.get('/extra/edit/:id', abreEditExtra);
router.post('/extra/update/:id', editExtra);
router.post('/extra/delete/:id', deleteExtra);

// Fixo
router.get('/fixo/add', abreAddFixo);
router.post('/fixo/add', addFixo);
router.get('/fixo/lst', listarFixo);
router.post('/fixo/lst', filtrarFixo);
router.get('/fixo/edit/:id', abreEditFixo);
router.post('/fixo/update/:id', editFixo);
router.post('/fixo/delete/:id', deleteFixo);

export default router;
