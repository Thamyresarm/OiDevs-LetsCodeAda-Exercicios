import fs from "fs"
import path from "path"


const file = path.resolve("arquivo.txt")
console.log("O CAMINHO DO MEU ARQUIVO É:", file)

fs.readFile(file, (err, data) => {
    if (err) {
        throw new Error("failed to read file")
    }
    console.log("O CONTEÚDO DO MEU ARQUIVO É:", data)
})

