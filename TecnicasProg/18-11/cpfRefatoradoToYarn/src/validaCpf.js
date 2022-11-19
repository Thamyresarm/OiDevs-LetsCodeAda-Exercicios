import CPF from "cpf-check";
 
function validarCpf(cpf){
	console.log(CPF.validate(cpf));
}

export {validarCpf}
