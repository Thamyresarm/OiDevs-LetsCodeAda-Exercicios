//Importando os Modulos (Dependencias)
// const env = require("dotenv").config().parsed;
const { PORT } = require("dotenv").config().parsed;
const express = require("express");

//Criando a aplicação
const app = express();

//Middleare
const cors = require("cors");
app.use(express.json());
app.use(cors());

//Mapeando as Rotas
require("../routes/users")(app); //forma diferente de chamar a função

const customers = require("../routes/customers");
app.use('/customers', customers);

//Habilitando a aplicação
app.listen(PORT, function () {
    console.log(`------------- Servidor On PORT ${PORT} -----------`)
})
