http.get("http://localhost:3000/", (res) => {
    let data = '';

    // Um bloco de dados foi recebido.
    res.on('data', (chunk) => {
      data += chunk;
    });
  
    // Toda a resposta foi recebida. Exibir o resultado.
    res.on('end', () => {
      console.log(JSON.parse(data));
    });
})

export {}