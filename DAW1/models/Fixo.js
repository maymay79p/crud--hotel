import conexao from "../config/conexao.js";

const fixoSchema = new conexao.Schema({
    quarto: {
        type: conexao.Schema.Types.ObjectId,
        ref: "Quarto",
        required: true
    },
    servico: {
        type: conexao.Schema.Types.ObjectId,
        ref: "Servico",
        required: true
    },
    valor: {
        type: Number,
        required: true
    }
});

const Fixo = conexao.model("Fixo", fixoSchema);

export default Fixo;
