import mongoose from 'mongoose';

const uri = "mongodb+srv://jlemos:Miraculous13@cluster0.rleqqp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function conectar() {
  try {
    await mongoose.connect(uri);
    console.log("Conectado ao MongoDB Atlas com sucesso!");
  } catch (error) {
    console.error("Erro na conexão:", error);
    process.exit(1);
  }
}

conectar();

export default mongoose;
