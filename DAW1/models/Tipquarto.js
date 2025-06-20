import conexao from "../config/conexao.js";

const tipquartoSchema = new conexao.Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    }
});

const Tipquarto = conexao.model("Tipquarto", tipquartoSchema);

export default Tipquarto;
