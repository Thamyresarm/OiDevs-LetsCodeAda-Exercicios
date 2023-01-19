//Conectando com o BD
const path = require("path");
const { PATH_DB } = require("dotenv").config().parsed;
const { Database } = require("sqlite3");

const db = new Database(path.resolve() + PATH_DB);

module.exports = db;