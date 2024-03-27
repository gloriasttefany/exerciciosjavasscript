
let numero = parseInt(prompt("Por favor, insira um número:"));


if (numero % 2 === 0) {
    console.log("O número " + numero + " é divisível por 2.");
}
else if (numero % 3 === 0) {
    console.log("O número " + numero + " é divisível por 3.");
} 
else if (numero % 5 === 0) {
    console.log("O número " + numero + " é divisível por 5.");
}
else if (numero % 6 === 0) {
    console.log("O número " + numero + " é divisível por 6.");
} 
else {
    console.log("O número " + numero + " não é divisível por 2, 3, 5 ou 6.");
}
