import mongoose from "mongoose";

const conexao = await mongoose.connect("mongodb://aluno:hotel00@cluster0-shard-00-00.luoxr.mongodb.net:27017,cluster0-shard-00-01.luoxr.mongodb.net:27017,cluster0-shard-00-02.luoxr.mongodb.net:27017/?ssl=true&replicaSet=atlas-liydtq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")

export default conexao; 
