import mongoose from 'mongoose';

const uri = await mongoose.connect("mongodb://aluno:<db_password>@cluster0-shard-00-00.luoxr.mongodb.net:27017,cluster0-shard-00-01.luoxr.mongodb.net:27017,cluster0-shard-00-02.luoxr.mongodb.net:27017/?ssl=true&replicaSet=atlas-liydtq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0");

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
