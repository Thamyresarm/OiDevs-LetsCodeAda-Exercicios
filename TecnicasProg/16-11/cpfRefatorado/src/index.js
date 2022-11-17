import cpfGenerate from "./cpfGenerate."
import cpfFormat from "./cpfFormat"
import validarCpf from "./validaCpf"
import cpfStrip from "./cpfstrip"

//validarCpf('676.754.677-10')

const novoCpf = cpfGenerate()
validarCpf(novoCpf)
cpfFormat(novoCpf)
cpfStrip(novoCpf)
