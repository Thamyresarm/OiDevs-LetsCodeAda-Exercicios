import CPF from "cpf-check";

function cpfGenerate(){
    const novoCpf = CPF.generate()
	console.log(novoCpf);
    return novoCpf;
}

export {cpfGenerate}