import conexao from "../config/conexao.js";

const quartoSchema = new conexao.Schema({
    diaria: {
        type: Number,
        required: true,
    },
    numero: {
        type: String,
        required: true,
    },
    capacidade: {
        type: String,
        required: true,
    },
    andar: {
        type: String,
        required: true,
    },
    tipquarto: {
        type: conexao.Schema.Types.ObjectId,
        ref: "Tipquarto",
        required: true,
    }
});

const Quarto = conexao.model("Quarto", quartoSchema);

export default Quarto;
