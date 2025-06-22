import mongoose from '../config/conexao.js'; // assumindo que 'conexao' exporta o mongoose conectado

const clienteSchema = new mongoose.Schema({
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
    senha: {
        type: String,
        required: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

const Cliente = mongoose.model("Cliente", clienteSchema);

export default Cliente;


