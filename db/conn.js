require("dotenv").config()
const {MongoClient, ServerApiVersion} = require('mongodb')
const uri = process.env.DB

const client = new MongoClient(uri, {
   serverApi: {
     version: ServerApiVersion.v1,
     strict: true,
     deprecationErrors: true,
   }
 });

async function run (){
 try {
    await client.connect()
    console.log('Banco conectado com sucesso!')
 } catch (error) {
    console.log('Erro ao conectar')
    console.log(error)
 }   
}

run()

module.exports = client