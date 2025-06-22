import mongoose from 'mongoose';

const extraSchema = new mongoose.Schema({
    contrato: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contrato",
        required: true
    },
    servico: {
        type: mongoose.Schema.Types.ObjectId,
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

const Extra = mongoose.model("Extra", extraSchema);

export default Extra;

