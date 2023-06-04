const mongoose = require('mongoose')

const connectDataBase = () => {
   mongoose.connect(
      "mongodb+srv://root:root@cluster0.gfmurfr.mongodb.net/prodtucts?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
   }).then(() => console.log('MondoDB conectado!!!')).catch((error) => console.log(error))
}

module.exports = connectDataBase