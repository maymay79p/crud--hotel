import conexao from "../config/conexao.js";

const contratoSchema = new conexao.Schema({
    data_inicio: {
        type: Date,
        required: true,
    },
    data_fim: {
        type: Date,
        required: true,
    },
    valor: {
        type: Number,  
        required: true,
    }
});

const Contrato = conexao.model("Contrato", contratoSchema);

export default Contrato;
