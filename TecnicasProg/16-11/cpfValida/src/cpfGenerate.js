const CPF = require("cpf-check");

function cpfGenerate(){
    const novoCpf = CPF.generate()
	console.log(novoCpf);
    return novoCpf;
}

module.exports = cpfGenerate;