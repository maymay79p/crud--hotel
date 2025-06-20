import conexao from "../config/conexao.js";

const extraSchema = new conexao.Schema({
    contrato: {
        type: conexao.Schema.Types.ObjectId,
        ref: "Contrato",
        required: true
    },
    servico: {
        type: conexao.Schema.Types.ObjectId,
        ref: "Servico",
        required: true
    },
    quantidade: {
        type: Number,
        required: true,
        default: 1
    },
    valor_total: {
        type: Number,
        required: true
    }
});

const Extra = conexao.model("Extra", extraSchema);

export default Extra;
