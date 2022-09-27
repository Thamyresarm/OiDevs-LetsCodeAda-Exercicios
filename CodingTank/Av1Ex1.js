const prompt = require('prompt-sync')();

uf = prompt("Digite a sigla do estado: ")
uf = uf.toUpperCase()

switch(uf){
    case "RJ":console.log("Carioca") 
    break

    case "SP":console.log("Paulista") 
    break

    case "MG":console.log("Mineiro") 
    break

    case "PE":console.log("Pernanbucano") 
    break

    case "PB":console.log("Paraibano") 
    break

    case "RN":console.log("Potiguar") 
    break

    default: console.log("Outros Estados")
}
