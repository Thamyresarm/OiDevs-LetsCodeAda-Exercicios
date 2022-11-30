# Aula 07

## Instale a biblioteca `dotenv`

- Crie um arquivo `.env` na raiz do projeto
- Adicione uma variavel `HTTP_PORT=`

## Instale um client http

https://insomnia.rest/download

## Implemente a API

- Metodo `POST`deve criar uma pessoa fisica com o dados

exemplo:

```json

{
    "nome": "maria",
    "data_nascimento": "24/02/1990"
}
```

Antes de de salvar no banco deve formatar a `data_nascimento` para o formato `1990-02-24`