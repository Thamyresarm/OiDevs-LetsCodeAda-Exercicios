const mongoose = require('mongoose');

require("../infra/connection");

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validate: {
            validator: function(value){
                console.log(value.includes('@'));
                return value.includes("@");
            },
            message: 'Precisa ser um email'
        }
    },
    birthday: {
        type: String,
        require: true
    },
    cpf: {
        type: String,
        require: true
    },
    typeAccount: {
        type: String,
        require: true
    }
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;

// const conn = require("../infra/connection");
// const { ulid } = require("ulid");

// class Customer {

//     findAll(callback) {
//         const sql = "SELECT * FROM customers";
//         conn.all(sql, callback);
//     };

//     findOne(id, callback) {
//         const sql = `SELECT * FROM customers WHERE id = "${id}"`;
//         conn.get(sql, callback);
//     };

//     create(data, callback) {
//         const { name, email, birthday, cpf, typeAccount } = data;

//         const sql = `INSERT INTO customers
//                     (id, name, email, birthday, cpf, typeAccount)
//                     VALUES 
//                     ('${ulid()}', '${name}', '${email}','${birthday}',
//                     '${cpf}', '${typeAccount}')`;
                    
//         conn.run(sql, callback);
//     };

//     updatePartial(id, data, callback) {
//         // console.log(Object.keys(data));
//         // console.log(Object.values(data));
//         let fields = [];
//         Object.entries(data).forEach(line => {
//            fields.push(`${line[0]} = '${line[1]}'`);
//         });

//         const sql = `UPDATE customers SET 
//                         ${fields.join(",")}
//                     WHERE 
//                         id = '${id}'`;

//         conn.run(sql, callback);
//     };

//     delete(id, callback) {
//         const sql = `DELETE FROM customers WHERE id = "${id}"`;
//         conn.run(sql, callback);
//     };
// }

// module.exports = new Customer();