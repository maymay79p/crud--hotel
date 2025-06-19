const hotelController = require('../controllers/controllers');

// ROTAS HOTEL CRUD
router.get('/hotel/cadastro-cliente', hotelController.showCadastroCliente);
router.post('/hotel/cadastrar-cliente', hotelController.cadastrarCliente);
router.post('/hotel/escolher-quarto', hotelController.escolherQuarto);
router.post('/hotel/salvar-reserva', hotelController.salvarReserva);
