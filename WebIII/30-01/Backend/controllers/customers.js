const CustomerModel = require("../model/customer");

exports.getAll = (req, res) => {

    CustomerModel
        .findAll()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json({ err }));
};

exports.getOne = (req, res) => {

    CustomerModel
        .findOne({ where: { id: req.params.id } })
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(404).send({ errMsg: "customer not found" }))
};

exports.createOne = (req, res) => {

    const { ulid } = require("ulid");
    const data = { id: ulid(), ...req.body };

    CustomerModel
        .create(data)
        .then(() => res.status(201).json(data))
        .catch((err) => res.status(500).json({ err }));
};

exports.updateOne = (req, res) => {

    CustomerModel
        .update({ ...req.body },
            { 
                where: { id: req.params.id }
            }
        )
        .then((data) => res.status(201).json(data))
        .catch((err) => res.status(500).json({ err }));
}

exports.deleteOne = (req, res) => {

    CustomerModel
        .destroy({ where: { id: req.params.id }})
        .then((data) => res.status(204).json(data))
        .catch((err) => res.status(500).json({ err }));
};
