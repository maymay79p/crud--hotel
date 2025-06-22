import mongoose from 'mongoose';

const fixoSchema = new mongoose.Schema({
    quarto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quarto",
        required: true
    },
    servico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Servico",
        required: true
    },
    valor: {
        type: Number,
        required: true
    }
});

const Fixo = mongoose.model("Fixo", fixoSchema);

export default Fixo;
