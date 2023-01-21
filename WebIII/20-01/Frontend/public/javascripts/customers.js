function getAllCustomers() {
    console.log("foi no get");    
    
    const endPoint = `http://localhost:8080/customers`;
    
    const config = {
        method: "GET"
    };
    
    fetch(endPoint, config);
}

getAllCustomers();