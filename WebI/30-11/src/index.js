import express from 'express';

const server = express();
const port = 3333;

// function getRoot(request, response) {
//     response.send('Hello World!');
// }

// server.use('/', getRoot);

server.get('/', (request, response) => {
    response.send('Hello World from get!');
});

server.post('/', (request, response) => {
    response.send('Hello World from post!');
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});

