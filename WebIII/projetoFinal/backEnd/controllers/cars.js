const CarModel = require("../model/car");

exports.getAll = (req, res) => {

    CarModel
        .findAll()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json({ err }));
};

exports.getOne = (req, res) => {

    CarModel
        .findOne({ where: { placa: req.params.placa } })
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(404).send({ errMsg: "car not found" }))
};

exports.createOne = (req, res) => {

    const data = {...req.body };

    CarModel
        .create(data)
        .then(() => res.status(201).json(data))
        .catch((err) => res.status(500).json({ err }));
};

exports.updateOne = (req, res) => {

    CarModel
        .update({ ...req.body },
            { 
                where: { placa: req.params.placa }
            }
        )
        .then((data) => res.status(201).json(data))
        .catch((err) => res.status(500).json({ err }));
}

exports.deleteOne = (req, res) => {

    CarModel
        .destroy({ where: { placa: req.params.placa }})
        .then((data) => res.status(204).json(data))
        .catch((err) => res.status(500).json({ err }));
};
