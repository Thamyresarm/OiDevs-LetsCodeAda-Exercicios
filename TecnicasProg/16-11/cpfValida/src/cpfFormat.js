const CPF = require("cpf-check");
 
function cpfFormat(cpf){
	console.log(CPF.format(cpf));
}

module.exports = cpfFormat;