// Recuperar o botao no HTML
const btnEditar = document.getElementById("buttonNew");
const btnSearch = document.getElementById("buttonSearch");
const btnCancel = document.getElementById("buttonCancel");
const fields = document.querySelectorAll("input");
const fieldPlaca = document.querySelectorAll("input#placa");

btnSearch.onclick = () => {
    const endPoint = `http://localhost:8080/cars/${fieldPlaca[0].value}`;

    const config = {
        method: "GET"
    };

    fetch(endPoint, config)
        .then((res) => res.json())
        .then((car) => {
            fields.forEach((field) => {
                field.value = car[field.id];
            });
        });

    btnSearch.disabled = true;
    fieldPlaca[0].disabled = true;
}

btnCancel.onclick = () => {
    btnSearch.disabled = false;
    fieldPlaca[0].disabled = false;
    fields.forEach((field) => {
        field.value = "";
    });
}


//Atribuir um evento ao botão
btnEditar.onclick = () => {

    const data = {};


    fields.forEach((field) => {
        data[field.id] = field.value;
    });

    console.log(data);
    console.log(JSON.stringify(data));

    const endPoint = `http://localhost:8080/cars/${data.placa}`;

    const config = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: new Headers({
            "content-type": "application/json"
        })
    };

    fetch(endPoint, config)
        .then((res) => {
            if (res.ok) location.href = "/";
        })
        .catch(() => console.error("FALHA!!!"));
}