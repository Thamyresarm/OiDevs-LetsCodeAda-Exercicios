const conn = require("../infra/connection");  

exports.getAll = (req, res) => {
    const sql = "SELECT * FROM customers";
    conn.all(sql, (err, data) => {
        res.send(data);
    });
}; 

exports.getOne = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM customers WHERE id = "${id}"`;
    conn.get(sql, (err, data) => {
        if (data) {
            res.status(200).send(data);            
        }else{
            res.status(404).send({ err: "Customer não encontrado!"});
        }
    });
};

exports.createOne = (req, res) => {
    const {id, name, email, birthday, cpf, typeAccount } = req.body;
    
    const sql = `INSERT INTO customers
                    (id, name, email, birthday, cpf, typeAccount)
                    VALUES 
                    ('${id}', '${name}', '${email}','${birthday}',
                    '${cpf}', '${typeAccount}')`;
    
    conn.run(sql, (err) => {
        if (!err) {
            res.status(201).send({id, name, email, birthday, cpf, typeAccount});            
        }else {
            res.status(400).send({err});
        };
    });
};

exports.updateOne = (req, res) => console.log(`put cliente`);

exports.deleteOne = (req, res) =>{
    const { id } = req.params;
    const sql = `DELETE FROM customers WHERE id = "${id}"`;
    conn.run(sql, (err, data) => {
        if (!err) res.status(204).end();                    
    });
};