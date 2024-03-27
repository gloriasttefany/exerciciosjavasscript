

let a = parseFloat(prompt("Insira o coeficiente 'a' (diferente de zero):"));
if (a === 0) {
    console.log("Esta não é uma equação do segundo grau. O coeficiente 'a' deve ser diferente de zero.");
}

let b = parseFloat(prompt("Insira o coeficiente 'b':"));
let c = parseFloat(prompt("Insira o coeficiente 'c':"));

let delta = b * b - 4 * a * c;

if (delta < 0) {
    console.log("Esta equação não possui raízes reais, ou seja, suas raízes são números complexos.");
    // Encerra o programa
    return;
}

let resultado = delta=(b**2)-(4*a*c)
let x1=(-1*b) -(Math.sqrt(delte)) /(2+a)
let x2=(-1*b + Math.sqrt(delte)) /(2+a)

console.log("As raízes da equação são:", x1, "e", x2);




