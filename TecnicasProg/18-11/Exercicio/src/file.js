import fs from 'fs';
import path from 'path';
import { cpus } from './os.js';
import { getTimestamp } from './date.js';

const cpu = { cpus };

const newFile = `cpus-${getTimestamp()}.txt`;

console.log(newFile);

fs.writeFile(newFile, JSON.stringify(cpu), (err) => {
  if (err) {
    console.log('erro');
  } else {
    console.log('Arquivo salvo com sucesso\n');
  }
});

const file = path.resolve('cpu.txt');

fs.readFile(file, (err, data) => {
  if (err) {
    throw new Error('failed to read file');
  }
  console.log('O CONTEÚDO DO MEU ARQUIVO É: ', String(data));
});


