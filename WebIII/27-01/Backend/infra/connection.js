//Conectando com o BD
const path = require("path");
// const { PATH_DB } = require("dotenv").config().parsed;
// const { Database } = require("sqlite3");

const {PATH_DB, DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE} = require("dotenv").config().parsed;
const mongoose = require("mongoose");

const db = mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}?retryWrites=true&w=majority`)
.then(() => console.log("Conectado com sucesso"))
.catch((err) => console.error(err));

module.exports = db;