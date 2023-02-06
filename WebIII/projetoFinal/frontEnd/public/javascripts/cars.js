function getAllCars() {

    const endPoint = `http://localhost:8080/cars`;

    const config = {
        method: "GET"
    };

    fetch(endPoint, config)
        .then((res) => res.json())
        .then((cars) => {

            document.querySelector("tbody").innerHTML =
                cars.map((car) => {
                    console.log(car)
                    return `<tr>
                <th scope="row">${car.placa}</th>
                <td>${car.marca}</td>
                <td>${car.modelo}</td>
                <td>${car.ano_fab}</td>
                <td>${car.ano_modelo}</td>
                <td>${car.cor}</td>
              </tr>`
                }).join("");

        })
        .catch(() => console.log("Falha"))
        .catch(() => console.log("Falha"))
}

getAllCars();