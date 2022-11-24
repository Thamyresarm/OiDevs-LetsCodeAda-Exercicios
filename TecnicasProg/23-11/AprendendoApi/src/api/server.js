import  fs  from "fs"
import http from "http"
import path from 'path';


const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" })

    const file = path.resolve('src/api/products.json');

    fs.readFile(file,(err, data) => {
        if (err) {
          throw new Error('failed to read file ');
        }
        
        response.end(data);
    })

})

server.listen(3000, () => {
    console.log("Server staterd at port 3000")
})

