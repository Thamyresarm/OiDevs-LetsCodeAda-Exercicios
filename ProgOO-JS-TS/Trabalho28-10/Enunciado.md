Crie as entidades(classes) necessárias para um sistema que faça o controle de funcionários de uma empresa. 
Essa empresa conta com dois tipos de contrato, CLT e estágio, e deve representar os atributos de seus funcionários
de acordo com seu tipo de contrato, como carga horária, cargo, formação, dados pessoais.

Esse sistema, deve ser capaz de gerar o contra cheque de cada funcionário, deve também adicionar, remover e listar
os funcionários

Crie as entidades necessárias para um sistema que faça o controle de funcionários de uma empresa:

    * Um funcionário deve ter dados pessoais(nome, idade, etc.)
    * Um funcionário devem ter uma carga horária
    * Um CLT devem ter uma formação
    * Um CLT devem ter um cargo
    * Um CLT deve ter um atributo salário
    * Um estagiário deve ter um atributo "bolsa"(salário)
    * Um estagiário deve ter um atributo formação
    * Um estagiário deve ter um uma área de atuação
    * Um estagiário deve ter um atributo status da formação ("cursando")
    * A classe funcionário deve conter um método "gerarRemuneracao"
    * Funcionários CLT tem desconto no pagamento, e deve ser calculado na hora de gerar a remuneração

    * É preciso ter uma listagem de funcionários, para isso utilize uma classe Funcionários 
        * A classe Funcionarios deve métodos para adicionar e remover um funcionário 


    Possíveis entidades:
        Funcionario
        Funcionarios
        ContratoCLT
        ContratoEstagio