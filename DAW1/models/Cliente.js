import conexao from '../config/conexao.js';

const clienteSchema = new conexao.Schema({
    nome: {
        type: String,
        required: true,
    },
    dataNascimento: { 
        type: Date,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

const Cliente = conexao.model("Cliente", ClienteSchema);

export default Cliente;

