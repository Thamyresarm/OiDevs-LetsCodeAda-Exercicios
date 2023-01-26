const express = require("express");
const router = express.Router();

//const {getAll, createOne, getOne, updateOne, deleteOne}= require("../controllers/cars");

router.get('/', (req,res)=>{
    res.send("Teste!!");
});

/* router.post('/', createOne);

router.get('/:id', getOne);

router.put('/:id', updateOne);

router.delete('/:id', deleteOne);
 */
module.exports = router;