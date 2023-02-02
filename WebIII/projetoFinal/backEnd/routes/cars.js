const express = require("express");
const router = express.Router();

const {getAll, createOne, getOne, updateOne, deleteOne}= require("../controllers/cars");

router.get('/', getAll);

 router.post('/', createOne);

router.get('/:placa', getOne);

router.put('/:placa', updateOne);
router.patch('/:placa', updateOne);

router.delete('/:placa', deleteOne);
 
module.exports = router;