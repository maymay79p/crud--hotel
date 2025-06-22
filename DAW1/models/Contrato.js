import mongoose from 'mongoose';

const contratoSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente",
        required: true
    },
    quarto: {
        type: mongoose.Schema.Types.ObjectId,
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
    dataReserva: {
        type: Date,
        default: Date.now
    }
});

const Contrato = mongoose.model("Contrato", contratoSchema);

export default Contrato;

