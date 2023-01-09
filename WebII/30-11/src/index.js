import express from 'express';

const server = express();

server.use(express.json());

const port = 3333;
let users = [];

// function getRoot(request, response) {
//     response.send('Hello World!');
// }

// server.use('/', getRoot);

server.get('/', (request, response) => {
    response.send(users);
    // response.send('Hello World from get!');
});

server.post('/', (request, response) => {
    const user = request.body;
    users.push(user);
    console.log(request.body);

    return response.send(user);
    // response.send('Hello World from post!');
});

server.put('/:id', (request, response) => {
    const {id} = request.params;
    const userIndex = users.findIndex((x) => x.id === Number(id));

    if(userIndex ===  -1){
        //retornar que nao encontrou
       return response.send('Not Found!');
        
     }
        users[userIndex].name = request.body.name;
        users[userIndex].data_nascimento = request.body.data_nascimento;

        response.send(users[userIndex]);

    // if(userIndex ===  -1){
    //     //nao encontrou
    //     response.send('Not Found!');
    //  } else {
    //     users[userIndex].name = request.body.name;
    //     users[userIndex].data_nascimento = request.body.data_nascimento;

    //     response.send(users[userIndex]);
    // }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});

