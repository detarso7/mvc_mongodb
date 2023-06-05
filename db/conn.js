require("dotenv").config()
const mongoose = require('mongoose')

const DB = process.env.DB

const connectDataBase = () => {
   mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
   .then(() => console.log('MondoDB conectado!!!'))
   .catch((error) => console.log(error))
}

module.exports = connectDataBase