const express = require("express");
const router = express.Router();
// const customersController = require("../controllers/customers");
const {getAll, createOne, getOne, updateOne, deleteOne}= require("../controllers/customers");

//Recuperar todos os clientes
// router.get('/', customersController.getAll);
router.get('/', getAll);

//Criar um Cliente
// router.post('/', customersController.createOne);
router.post('/', createOne);

//Recuperar um cliente especifico
// router.get('/:id', customersController.getOne);
router.get('/:id', getOne);

//Atualizar um cliente
// router.put('/:id', customersController.updateOne);
router.put('/:id', updateOne);

//Deletar um cliente
// router.delete('/:id', customersController.deleteOne);
router.delete('/:id', deleteOne);

module.exports = router;