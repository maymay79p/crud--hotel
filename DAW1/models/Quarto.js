import mongoose from 'mongoose';

const quartoSchema = new mongoose.Schema({
    diaria: {
        type: Number,
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tipquarto",
        required: true,
    }
});

const Quarto = mongoose.model("Quarto", quartoSchema);

export default Quarto;
