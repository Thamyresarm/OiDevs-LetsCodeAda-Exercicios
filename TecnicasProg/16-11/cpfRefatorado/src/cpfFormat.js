import  CPF  from "cpf-check";

function cpfFormat(cpf){
	console.log(CPF.format(cpf));
}

export default {cpfFormat}