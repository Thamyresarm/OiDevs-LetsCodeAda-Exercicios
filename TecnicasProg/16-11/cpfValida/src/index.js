const validarCpf = require("./validaCpf.js");
const cpfGenerate = require("./cpfGenerate");
const cpfFormat = require("./cpfFormat.js");
const cpfStrip = require("./cpfstrip.js");

//validarCpf('676.754.677-10')

const novoCpf = cpfGenerate()
validarCpf(novoCpf)
cpfFormat(novoCpf)
cpfStrip(novoCpf)
