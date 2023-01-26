const { PORT } = require("dotenv").config().parsed;
const express = require("express");

const app = express();
app.use(express.json());

const cars = require("../routes/cars");
app.use('/cars', cars);

//Habilitando a aplicação
app.listen(PORT, function () {
    console.log(`------------- Servidor On PORT ${PORT} -----------`)
})
