//Importando os Modulos (Dependencias)
const express = require("express");

//Criando a aplicação
const app = express();

//Mapeando as Rotas
require("../routes/users")(app); //forma diferente de chamar a função

//Habilitando a aplicação
app.listen(3000, function () {
    console.log('------------- Servidor On -----------')
})
