import http from "http"
import "dotenv/config"
import dotenv from 'dotenv'
import path from "path"
import { buscarPessoasFisicas, criarPessoaFisica } from "./service/pessoaFisicaService.js"

dotenv.config({
    path: process.env.NODE_ENV ==="PROD" ? path.resolve(".env.prod") : path.resolve(".env.dev")
})

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" })
    switch (req.method) {
        case "POST":
            req.on("data", (data) => {
                criarPessoaFisica(JSON.parse(data))
            })
            
            res.end(JSON.stringify('Pessoa criada com sucesso!'))
            break;

        default:
            const pessoas = buscarPessoasFisicas()
            res.end(JSON.stringify(pessoas))
            break;
    }

})


server.listen(process.env.HTTP_PORT, () => [
    console.log(`Server started at port ${process.env.HTTP_PORT}`)
])