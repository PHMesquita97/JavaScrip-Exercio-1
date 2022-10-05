/*Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let n1 = prompt("Digite o Primeiro número: ")
let n2 = prompt("Digite o Segundo número:")

n1 = Number(n1)
n2 = Number(n2)

const sum = n1 + n2
const min = n1 - n2
const multi = n1 * n2
const div = n1 / n2
const divRest = n1 % n2
//O resto da divisão dividido por 2 se for 0 é par!
const even = divRest % 2;

alert("A soma dos seus dois números é: " + sum)
alert("A subtração dos seus dois números é " + min)
alert("A multiplicação dos seus dois números é " + multi)
alert("A divisão dos seus dois números é: " + div)
alert("O resto da divisão dos seus dois numeros é: " + divRest)

if(even == 0) {
  alert("A soma dos seus dois numeros é par")
}else{
  alert("a soma dos seus dois numeros é impar")
}

if (n1 == n2) {
alert("Os dois números que você digitou são: iguais")
}else{
alert("Os dois números que você digitou são: diferentes")
}



