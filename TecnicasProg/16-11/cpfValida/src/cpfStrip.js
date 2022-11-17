const CPF = require("cpf-check");
 
function cpfStrip(cpf){
	console.log(CPF.strip(cpf));
}

module.exports = cpfStrip;