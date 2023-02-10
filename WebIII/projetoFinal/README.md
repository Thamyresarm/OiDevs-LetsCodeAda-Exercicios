
# Projeto cadastro de veículos - Módulo WebIII

Repositório com o trabalho de final de módulo do curso OI DEVS em parceria com a Let's Code Ada!




## Iniciando o Projeto

- Faça um git clone do repositório.
- Tenha o Docker instalado.
- No terminal, navegue até a o diretorio WebIII/projetoFinal/backEnd.

  Com o terminal apontado para a pasta acima instalar todas as dependencias desse projeto digitando:

  ```bash
    npm i
  ```
  Para iniciar o banco de dados, digite: 
  ```bash
    docker compose up
  ```
  E para subir a API, digite: 

  ```bash
    npm start
  ```

- No terminal, retorne uma pasta e navegue até a o diretorio WebIII/projetoFinal/frontEnd
    
  Com o terminal apontado para a pasta acima, para instalar todas as dependencias, digite: 

    ```bash
      npm i
    ```
  E para subir a aplicação, digite: 

    ```bash
      npm start
    ```
- Por fim, abra o navegador e acesse a url: http://localhost:3000, para acessar a aplicação
## Telas

O projeto se inica com a seguinte tela: 

![image](https://user-images.githubusercontent.com/24790794/216857005-cc5075cd-afeb-4ecb-a770-fcadb305c98d.png)

No botão 'Novo Carro' abre a tela de cadastro para um novo registro:

![image](https://user-images.githubusercontent.com/24790794/216857022-a6c5166f-03d5-48b7-97d8-41cde00b8393.png)

No botão 'Editar Carro' abre a tela de edição para alterar um registro. Ao digitar a placa do veículo e clicar no botão 'Buscar', todos os outros campos são automaticamente preenchidos: 

![image](https://user-images.githubusercontent.com/24790794/216857029-f2443544-d00a-4caf-bb79-dcfe410df351.png)

No botão 'Exluir Carro' abre a tela de exclusão de um novo registro. Assim como a tela anterior, ao digitar a placa do veículo e clicar no botão 'Buscar', todos os outros campos são automaticamente preenchidos:

![image](https://user-images.githubusercontent.com/24790794/216857043-4632b316-0ea0-4806-90f5-6f9cfb8abffb.png)

Todas as telas tem a opção de retornar para a tela principal, clicando no botão 'Voltar'.

As telas de edição e exclusão tem o botão 'Cancelar' que limpa todos os registros.



## Referencias da API

#### Obter todos os items

```http
  GET http://localhost:8080/cars
```
#### Obter um item

```http
  GET http://localhost:8080/cars/${placa}
```
#### Salvar um item

```http
  POST http://localhost:8080/cars
```
#### Atualizar um item

```http
  PUT http://localhost:8080/cars/${placa}
```
#### Deletar um item

```http
  DELETE http://localhost:8080/cars/${placa}
```

#### Campos

| Parametro | Tipo     | Descrição                |
| :-------- | :------- | :------------------------- |
| `placa` | `string` | **Requerido**. Chave Primária |
| `marca` | `string` | **Requerido**. Marca do veículo |
| `modelo` | `string` | **Requerido**. Modelo do veículo |
| `ano_fab` | `number` | **Requerido**. Ano de fabricação |
| `ano_modelo` | `number` | **Requerido**. Ano do Modelo |
| `cor` | `string` | **Requerido**. Cor do veículo |


## 🛠️ Aprendizados

- Javascript
- Express
- Nodemon
- Sequelize
- Docker
- Postegres

## Autor

<a href="https://www.linkedin.com/in/thamyres-magalhaes/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/24790794?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Thamyres Magalães</b></sub></a> <a href="https://www.linkedin.com/in/thamyres-magalhaes/" title="LinkedIn"></a>
 
Feito por Thamyres Magalhães 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Thamyres-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thamyres-magalhaes/)](https://www.linkedin.com/in/thamyres-magalhaes/)
[![Gmail Badge](https://img.shields.io/badge/-pink.thamyres@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:pink.thamyres@gmail.com)](mailto:pink.thamyres@gmail.com)
