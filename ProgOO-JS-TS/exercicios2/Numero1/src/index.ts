class Aluno {
    private matricula: string;
    private nome: string;    

    constructor(matricula: string, nome: string){
        this.matricula =  matricula;
        this.nome = nome;
    }
}

class Disciplina {
    private codigo: string;
    private nome: string;

    constructor(codigo: string, nome: string){
        this.codigo =  codigo;
        this.nome = nome;
    }
}

class Avaliacao {
    private aluno: Aluno;
    private disciplina: Disciplina;
    private provas: number[] = [];
    private trabalho: number;

    constructor(aluno: Aluno, 
                disciplina: Disciplina, 
                provas: number[], 
                trabalho: number)
    {
        this.aluno = aluno;
        this.disciplina = disciplina;
        this.provas = provas; 
        this.trabalho = trabalho;
    } 

    public mediaNotas() {
        const calcProvas = this.provas.reduce((previous, current) => previous + current * 2.5, 0);
        const calcTrabalho = this.trabalho * 2;
        return (calcProvas+calcTrabalho) / 3;
    }

    public precisaProvaFinal(){
            if(this.mediaNotas() >= 7){
                return 0;                
            }
            else{
                return console.log("Precisa de prova final!");
            }
    }
}

const aluno1 = new Aluno("Mat1", "Thamyres");
const disciplina1 = new Disciplina("POO","Programação Orientada a Objeto");
const avaliacao = new Avaliacao(aluno1,disciplina1,[5,6],7);

console.log(avaliacao.mediaNotas());
console.log(avaliacao.precisaProvaFinal());