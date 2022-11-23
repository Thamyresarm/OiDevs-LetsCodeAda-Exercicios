
# Aula 5

Baseado no que vimos na ultima Aula vamos criar um servidor web (API) que retorna uma lista de produtos

### Instale a extensão no google chrome

https://chrome.google.com/webstore/detail/jsonview/gmegofmjomhknnokphhckolhcffdaihd?hl=en-US

### Pasta src/api

- Nesta pasta possui um arquivo `products.json` e este arquivo deve ser retornado pela (API)

- Implemente o arquivo `server.js` para que ele leia o arquivo `products.json` e o retorne no `response`

```bash
    npm run api
```

### Pasta src/client

Após criado a (API) e a mesma estiver retornando a lista de produtos `products.json`, iremos implementar um client que consuma a (API)

- procure na documentação oficial nodejs no modulo http em referência `http.get`

```bash
    npm run client
```


## Referência

 - [Cliente-Servidor](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/First_steps/Client-Server_overview)
 - [Modulo Http](https://nodejs.org/docs/latest-v14.x/api/http.html)
 - [Modulo FS](https://nodejs.org/docs/latest-v14.x/api/fs.html)

