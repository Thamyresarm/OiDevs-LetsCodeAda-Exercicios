import CPF from "cpf-check";
 
function cpfStrip(cpf){
	console.log(CPF.strip(cpf));
}

export default {cpfStrip}