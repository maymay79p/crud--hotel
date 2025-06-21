import conexao from "../config/conexao.js";

const contratoSchema = new conexao.Schema({
    cliente: {
        type: conexao.Schema.Types.ObjectId,
        ref: "Cliente",
        required: true
    },
    quarto: {
        type: conexao.Schema.Types.ObjectId,
        ref: "Quarto",
        required: true
    },
    data_inicio: {
        type: Date,
        required: true
    },
    data_fim: {
        type: Date,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
      dataCadastro: {
        type: Date,
        default: Date.now
    }
});

const Contrato = conexao.model("Contrato", contratoSchema);

export default Contrato;
