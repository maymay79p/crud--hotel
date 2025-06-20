import conexao from "../config/conexao.js";

const quartoSchema = new conexao.Schema({
    diaria: {
        type: Number, // Numeric é Number no Mongoose
        required: true,
    },
    capacidade: {
        type: String,
        required: true,
    },
    andar: {
        type: String,
        required: true,
    }
});

const Quarto = conexao.model("Quarto", quartoSchema);

export default Quarto;
