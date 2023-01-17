const express = require("express");
const router = express.Router();

//Conectando com o BD
const path = require("path");
const { PATH_DB } = require("dotenv").config().parsed;
const { Database } = require("sqlite3");

const db = new Database(path.resolve() + PATH_DB);

//Recuperar todos os clientes
router.get('/', (req, res) => {
    const sql = "SELECT * FROM customers";
    db.get(sql, (err, data) => {
        res.send(data);
    });
});

//Criar um Cliente
router.post('/', ()=> console.log(`post cliente`));

//Recuperar um cliente especifico

//Atualizar um cliente
router.put('/', ()=> console.log(`put cliente`));

//Deletar um cliente
router.delete('/', ()=> console.log(`delete cliente`));

module.exports = router;