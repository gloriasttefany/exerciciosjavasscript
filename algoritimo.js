
// importacao

const prompt = require("prompt-sync")()
const nota1 = Number(prompt("digite a nota1: "))
const nota2 = Number(prompt("digite a nota2: "))
const media = (nota1 + nota2)/2

//processamento

if (media >=6){
    console.log("aprovado")
}