module.exports = function(app){

//Recuperar um usuário
app.get("/users",
    (req, res, next) => {
        console.log("Step 1");
        next();
    },
    (req, res, next) => {
        console.log("Step 2")
        next();
    },
    (req, res) => {
        console.log("Step 3");
        res.send("HTTP - GET");
    }
);

//Criar um usuário
app.post("/users", (req, res) => {
    res.send("HTTP - POST");
});

//Atualizar um usuário
app.put("/users", (req, res) => {
    res.send("HTTP - PUT");
});

//Excluir um usuário
app.delete("/users", (req, res) => {
    res.send("HTTP - DELETE");
});
    

}