import conexao from "../config/conexao.js";

const servicoSchema = new conexao.Schema({
    descricao: {
        type: String,
        required: true,
    },
    mediaValor {
        type: Number,
        required: true,
    }
});

const Servico = conexao.model("Serviço", servicoSchema);

export default Servico;
