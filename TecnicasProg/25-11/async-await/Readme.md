# Aula 06

Em `src/index` implemente a criação e consulta de clientes no modelo `promise` e `async await`

```javascript
import { Db } from "./db.js"


function criarCliente(dados) {
    return Db.create(dados, "tabelaPessoaFisica")
}

function buscarCientes() {
    return Db.find("tabelaPessoaFisica")
}

```
