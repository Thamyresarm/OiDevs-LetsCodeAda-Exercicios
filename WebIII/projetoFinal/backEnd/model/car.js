const { DataTypes } = require("sequelize");
const sequelize = require("../infra/connection");

const CarModel = 
    sequelize.define(
        "CarModel", 
        {
            placa: {
                type: DataTypes.TEXT,
                allowNull: false,
                primaryKey: true,
                unique: true
            },
            marca: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            modelo: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            ano_fab: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            ano_modelo: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            cor: {
                type: DataTypes.TEXT,
                allowNull: false,
            }
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "veiculos"
        }
    );

module.exports = CarModel;