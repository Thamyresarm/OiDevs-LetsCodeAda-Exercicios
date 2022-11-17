import {cpfGenerate} from "./cpfGenerate.js"
import {cpfFormat} from "./cpfFormat.js"
import {validarCpf} from "./validaCpf.js"
import {cpfStrip} from "./cpfstrip.js"

// validarCpf('676.754.677-10')

const novoCpf = cpfGenerate()
validarCpf(novoCpf)
cpfFormat(novoCpf)
cpfStrip(novoCpf)
