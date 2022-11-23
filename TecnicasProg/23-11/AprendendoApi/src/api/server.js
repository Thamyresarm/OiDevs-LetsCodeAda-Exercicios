import http from "http"


const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" })
})

server.listen(3000, () => {
    console.log("Server staterd at port 3000")
})