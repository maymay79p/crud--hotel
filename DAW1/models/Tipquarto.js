import mongoose from 'mongoose';

const tipquartoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    }
});

const Tipquarto = mongoose.model("Tipquarto", tipquartoSchema);

export default Tipquarto;
