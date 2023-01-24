// Recuperar o botao no HTML
const btnCadastrar = document.querySelector("button");

//Atribuir um evento ao botão
btnCadastrar.onclick = () => {

    const data = {};

    const fields = document.querySelectorAll("input");

    fields.forEach((field) => {
        data[field.id] = field.value;
    });

    console.log(data);
    console.log(JSON.stringify(data));

    const endPoint = `http://localhost:8080/customers`;

    const config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers ({
            "content-type": "application/json"
        })
    };

    fetch(endPoint, config)
    .then((res) => {
        if(res.ok) location.href = "/customers";
    })
    .catch(() => console.error("FALHA!!!"));
}