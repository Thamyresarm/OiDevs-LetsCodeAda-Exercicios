const Customer = require("../dao/customer");

exports.getAll = (req, res) => {
   Customer.findAll((err, data) => res.send(data));
}; 

exports.getOne = (req, res) => {
    Customer.findOne(req.params.id, (err, data) => {
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send({ err: "Customer não encontrado!" });
        }
    });
};

exports.createOne = (req, res) => {
 Customer.create(req.body,(err) => {
        if (!err) {
            res.status(201).send({ err: "Criado com Sucesso" });
        } else {
            res.status(400).send({ err });
        };
    });    
};

exports.updateOne = (req, res) => {
    Customer.updatePartial(req.params.id, req.body, (err) => {
        if (!err) {
            res.status(201).send({ err: "Atualizado com Sucesso" });
        } else {
            res.status(400).send({ err });
        };
    });
}

exports.deleteOne = (req, res) =>{
    Customer.delete(req.params.id, (err) => {
        if (!err) res.status(204).end();
    });
};

/*module.exports = {
    getAll: (req, res) => {
        const sql = "SELECT * FROM customers";
        db.get(sql, (err, data) => {
            res.send(data);
        });
    },
    
    createOne: (req, res)=> console.log(`post cliente`),

    getOne: (req, res) => res.send(`getOne`),

    updateOne: (req, res)=> console.log(`put cliente`),

    deleteOne: (req, res)=> console.log(`delete cliente`),
}*/