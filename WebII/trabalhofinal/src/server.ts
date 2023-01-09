import express from 'express';
import routes from './routes'

const port = 3333;
const server = express();

// Habilitando a deserialização de JSON
server.use(express.json());

server.use(routes);

server.listen(port, () => {
    console.log('Server is running!');
  });