import fs from "fs"


function readFilePromise(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}


//PRINTANDO EXECUCAÇÃO FUNÇÃO
console.log("EXECUTANDO FUNCAO PROMISE", readFilePromise("arquivo.txt"))


//PRINTANDO RETORNO FUNÇÃO
readFilePromise("arquivo.txt").then((data) => console.log("TERMINOU DE EXECUTAR FUNCAO PROMISE", String(data))
).catch((err) => console.log(err))


async function readFileAsyncAwait() {
    //PRINTANDO EXECUCAÇÃO FUNÇÃO
    const dataE = readFilePromise("arquivo.txt")
    console.log("EXECUTANDO FUNCAO ASYNC", dataE)


    const data = await readFilePromise("arquivo.txt")
    console.log("TERMINOU DE EXECUTAR FUNCAO ASYNC AWAIT", String(data))
}

async function readFileAsyncAwait2() {
    //PRINTANDO EXECUCAÇÃO FUNÇÃO
    const dataE = readFilePromise("arquivo.txt")
    console.log("EXECUTANDO FUNCAO ASYNC2", dataE)

    const data = await readFilePromise("arquivo.txt")
    console.log("TERMINOU DE EXECUTAR FUNCAO ASYNC2 AWAIT", String(data))
}

readFileAsyncAwait()


const execute = async () => {
    await Promise.all([
        await readFileAsyncAwait(),
        await readFileAsyncAwait2()
    ])
}

execute()



setTimeout(() => {
    console.log(1)

    console.log(2)

    console.log(3)
}, 5000)


