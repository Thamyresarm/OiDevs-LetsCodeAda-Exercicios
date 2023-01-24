function getAllCustomers() {
    console.log("foi no get");

    const endPoint = `http://localhost:8080/customers`;

    const config = {
        method: "GET"
    };

    fetch(endPoint, config)
        .then((res) => res.json())
        .then((customers) => {

            document.querySelector("tbody").innerHTML = 
            customers.map((customer) => {
                return `<tr>
                <th scope="row">${customer.id}</th>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.cpf}</td>
              </tr>`                
            }).join("");

        })
        .catch(() => console.log("Falha"))
        .catch(() => console.log("Falha"))
}

getAllCustomers();