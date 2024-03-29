// Conectando com o Banco de Dados
const { DIALECT, POSTGRES_USER, POSTGRES_PASSWORD, HOST_DB, PORT_DB, NAME_DB } = require("dotenv").config().parsed;
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(`${DIALECT}://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${HOST_DB}:${PORT_DB}/${NAME_DB}`);

sequelize
    .authenticate()
    .then(() => console.log(`Conectado ao Postgres!`))
    .catch(() => console.log(`Falha na conexão ao banco de dados...`))

module.exports = sequelize;