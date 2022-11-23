# Aula 3

Modularização de código no back-end (Parte 2)

- Exportar e importar scripts com ES Modules (import e export);

    - Iniciar Projeto nodejs
        - Crie uma pasta com o nome `validador-cpf` e dentro da pasta execute:
    ```javascript
        npm init -y
    ```

    - Instalar Biblioteca https://www.npmjs.com/package/cpf-check
        - Após o projeto criado, novamente dentro da pasta execute 
    ```javascript
        npm install cpf-check
    ```

    - Crie uma pasta com o nome `src` e dentro dela um arquivo `index.js` e adicione o código: 
    ```javascript
        const validarCpf = require("./validaCpf.js");

        validarCpf('676.754.677-10')
    ```

    - Crie outro arquivo com o nome `validaCpf.js` e adicione o código: 
    ```javascript
        const CPF = require("cpf-check");
 
        function validarCpf(cpf){
            console.log(CPF.validate(cpf));
        }

        module.exports = validarCpf;
    ```

    - Crie um arquivo com o nome `.gitignore` e adicione a ele o conteudo:
    ```bash
        node_modules
    ```

    - Execute a aplicacao 
    ```javascript
        node src/index.js
    ```

    - Criar script `npm` para inciar aplicação
    ```javascript
        npm start
    ```


    - Executar node start e mostrar que somente o NPM olha para o package.json
    - Executar comando npm start fora da pasta do projeto que contem o package.json
    - Executar npm --help para mostrar comandos disponiveis
    - Pesquisar sobre o `npm start`
    - Pesquisar sobre como atualizar o arquivo `package.json` para o padrao ES6 Modules
    - Refatorar codigo para ES6 modules     

- Ampliar a qualidade do código com o uso de linters (ESLint / Prettier).
    - instalar https://eslint.org/ e dar um overview
    - falar da diferença das dependencias de `dev`
    - criar scripts   
       - "lint": "eslint src",
       - "lint:fix": "eslint --fix src"


### Dever de casa

- criar uma regra para adicionar `;` ao final de cada bloco
- caso o código não esteja no padrão nao deve retornar um `ERROR` e sim `WARN` 


[Grupo Gitlab](https://gitlab.com/be-ts-003-tecnicas-de-programacao-i)