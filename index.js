
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const conn = require("./db/conn").run;

const productsRoutes = require('./routes/productsRoutes')

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static('public'))

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use('/products', productsRoutes)
app.use('/', productsRoutes)

app.listen(3000)