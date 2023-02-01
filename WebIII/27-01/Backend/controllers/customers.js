// const Customer = require("../dao/customer");
const Customer = require("../model/customer");

exports.getAll = (req, res) => {

    let params = {};

    if(Object.keys(req.query).length > 0){
        
    };

    Customer.find({}).exec((err, data) => {
        res.send(data);
    })
    //    Customer.findAll((err, data) => res.send(data));
};

exports.getOne = (req, res) => {

    const param = { _id: req.params.id };

    Customer.findOne(param, (err, data) => {
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send({ err: "Customer não encontrado!" });
        }
    });

    // Customer.findOne(req.params.id, (err, data) => {
    //     if (data) {
    //         res.status(200).send(data);
    //     } else {
    //         res.status(404).send({ err: "Customer não encontrado!" });
    //     }
    // });
};

exports.createOne = (req, res) => {

    const customer = new Customer(req.body);

    customer.save((err) => {
        if (!err) {
            res.status(201).send({err: "Criado com Sucesso"});
        } else {
            res.status(400).send({ err });
        }
    });
    //  Customer.create(req.body,(err) => {
    //         if (!err) {
    //             res.status(201).send({ err: "Criado com Sucesso" });
    //         } else {
    //             res.status(400).send({ err });
    //         };
    //     });    
};

exports.updateOne = (req, res) => {

    Customer.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (!err) {
            res.status(201).send({err: "Atualizado com Sucesso"});
        } else {
            res.status(400).send({ err });
        }
    });

    // Customer.updatePartial(req.params.id, req.body, (err) => {
    //     if (!err) {
    //         res.status(201).send({ err: "Atualizado com Sucesso" });
    //     } else {
    //         res.status(400).send({ err });
    //     };
    // });
}

exports.deleteOne = (req, res) => {

    const param = { _id: req.params.id };
    Customer.remove(param, (err) => {
        if (!err) {
            res.status(204).send({});
        } else {
            res.status(400).send({ err });
        }
    });

    // Customer.delete(req.params.id, (err) => {
    //     if (!err) res.status(204).end();
    // });
};
