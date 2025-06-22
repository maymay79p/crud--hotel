import mongoose from 'mongoose';

const servicoSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true,
    },
    mediaValor: {
        type: Number,
        required: true,
    },
});

const Servico = mongoose.model("Servico", servicoSchema);

export default Servico;
