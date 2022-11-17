const CPF = require("cpf-check");
 
function validarCpf(cpf){
	console.log(CPF.validate(cpf));
}

module.exports = validarCpf;