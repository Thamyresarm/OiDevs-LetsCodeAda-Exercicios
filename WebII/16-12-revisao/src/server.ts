import  express  from "express";
import logs from "./middlewares/logs";
import routes from "./routes";

const server = express();

server.use(express.json());
server.use(logs); // implementar logs
server.use(routes);

server.listen(3333, () => {
    console.log('Running....')
});

