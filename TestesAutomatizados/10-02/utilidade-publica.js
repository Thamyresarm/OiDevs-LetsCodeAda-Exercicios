const array = [10, 20, 30, 40, 50]
            //  0   1   2   3   4

const stg = 'abcdefgh'
        //   01234567

// console.log(stg.charAt(0))

console.log(array[array.length - 1])


// Palindromos

function ePalindromo(palavra) {
    let palavraRevertida = reverterPalavra(palavra)
    return palavra === palavraRevertida
}

function reverterPalavra(palavra) {
    let palavraRevertida = ''

    for(let i = palavra.length - 1; i >= 0; i--) {
        palavraRevertida += palavra.charAt(i)
    }

    return palavraRevertida
}

const fnB = (palavra) => palavra.split('').reverse().join('') === palavra

console.log(fnA('abcdefghijklmnopqrstuvxz'))


