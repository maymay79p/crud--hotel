import express from 'express';
const router = express.Router();

import {
    abreAddCliente,
    addCliente,
    listarClientes,
    abreEditCliente,
    editarCliente,
    deletarCliente,
    filtrarClientes,

    abreAddContrato,
    addContrato,
    listarContratos,
    abreEditContrato,
    editarContrato,
    deletarContrato,
    filtrarContratos,

    abreAddTipQuarto,
    addTipQuarto,
    listarTipQuartos,
    abreEditTipQuarto,
    editarTipQuarto,
    deletarTipQuarto,
    filtrarTipQuartos,

    abreAddQuarto,
    addQuarto,
    listarQuartos,
    abreEditQuarto,
    editarQuarto,
    deletarQuarto,
    filtrarQuartos,

    abreAddServico,
    addServico,
    listarServicos,
    abreEditServico,
    editarServico,
    deletarServico,
    filtrarServicos,
    
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
} from './controllers/controllers.js'; 

// Página inicial
router.get('/', (req, res) => {
    res.render('telainicial');
});

//Cliente
router.get('/cliente/add', abreAddCliente);
router.post('/cliente/add', addCliente);
router.get('/cliente/lst', listarClientes);
router.post('/cliente/lst', filtrarClientes);
router.get('/cliente/edit/:id', abreEditCliente);
router.post('/cliente/update/:id', editarCliente);
router.post('/cliente/delete/:id', deletarCliente);

//Contrato
router.get('/contrato/add', abreAddContrato);
router.post('/contrato/add', addContrato);
router.get('/contrato/lst', listarContratos);
router.post('/contrato/lst', filtrarContratos);
router.get('/contrato/edit/:id', abreEditContrato);
router.post('/contrato/update/:id', editarContrato);
router.post('/contrato/delete/:id', deletarContrato);

//TipQuarto
router.get('/tipquarto/add', abreAddTipQuarto);
router.post('/tipquarto/add', addTipQuarto);
router.get('/tipquarto/lst', listarTipQuartos);
router.post('/tipquarto/lst', filtrarTipQuartos);
router.get('/tipquarto/edit/:id', abreEditTipQuarto);
router.post('/tipquarto/update/:id', editarTipQuarto);
router.post('/tipquarto/delete/:id', deletarTipQuarto);

//Quarto
router.get('/quarto/add', abreAddQuarto);
router.post('/quarto/add', addQuarto);
router.get('/quarto/lst', listarQuartos);
router.post('/quarto/lst', filtrarQuartos);
router.get('/quarto/edit/:id', abreEditQuarto);
router.post('/quarto/update/:id', editarQuarto);
router.post('/quarto/delete/:id', deletarQuarto);

//Serviço
router.get('/servico/add', abreAddServico);
router.post('/servico/add', addServico);
router.get('/servico/lst', listarServicos);
router.post('/servico/lst', filtrarServicos);
router.get('/servico/edit/:id', abreEditServico);
router.post('/servico/update/:id', editarServico);
router.post('/servico/delete/:id', deletarServico);

//Extra
router.get('/extra/add', abreAddExtra);
router.post('/extra/add', addExtra);
router.get('/extra/lst', listarExtra);
router.post('/extra/lst', filtrarExtra);
router.get('/extra/edit/:id', abreEditExtra);
router.post('/extra/update/:id', editExtra);
router.post('/extra/delete/:id', deleteExtra);

//Fixo
router.get('/fixo/add', abreAddFixo);
router.post('/fixo/add', addFixo);
router.get('/fixo/lst', listarFixo);
router.post('/fixo/lst', filtrarFixo);
router.get('/fixo/edit/:id', abreEditFixo);
router.post('/fixo/update/:id', editFixo);
router.post('/fixo/delete/:id', deleteFixo);

export default router;
