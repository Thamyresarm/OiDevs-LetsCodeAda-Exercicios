import http from 'http'
import  fs  from "fs"

http.get('http://localhost:3000/', (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
    let error;
    // Any 2xx status code signals a successful response but
    // here we're only checking for 200.
    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
            `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
            `Expected application/json but received ${contentType}`);
    }
    // exibição do erro
    if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
    }
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            fs.writeFile('apirecebida.txt', JSON.stringify(parsedData), (err) => {
                if (err) {
                    console.log('erro');
                } else {
                    console.log('Arquivo salvo com sucesso\n');
                }
            })
        } catch (e) {
            console.error(e.message);
        }
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});