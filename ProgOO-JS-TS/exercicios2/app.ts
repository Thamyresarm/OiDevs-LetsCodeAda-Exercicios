import { Data } from "./Numero2/src/Data";
import { Voo } from "./Numero3/src/Voo";

const data1 = new Data("24/06/1992")

const voo006 = new Voo("006", data1, "18:06");

console.log(voo006.assentos);
console.log("Voo: " + voo006.getVoo());
voo006.verifica(5);
voo006.ocupa(5);
voo006.verifica(5);
voo006.ocupa(5);
voo006.ocupa(1);
voo006.verifica(200);
voo006.ocupa(200);
console.log(voo006.assentos);
voo006.proximoLivre();
voo006.vagasDisponiveis()