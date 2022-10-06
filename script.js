/*Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.*/

const students = [
  {
    name: "Luiz",
    n1: 10,
    n2: 7,
  },
  {
    name: "Ana",
    n1: 7,
    n2: 9,
  },
  {
    name: "Beatriz",
    n1: 3,
    n2: 10,
  },
  {
    name: "Carlos",
    n1: 4,
    n2: 6,
  },
]

//Função para calcular as médias.
function getAvarege(n1, n2) {
  return (n1 + n2) / 2
}

//Função para calcular as médias para cada aluno.
function avarege(student){
  return `
  ${student.name} você atingiu média de ${getAvarege(student.n1, student.n2)}
  `
}

//Estrutura de loop para poder automatizar entrar em cada objeto do STUDENTS
for (let student of students) {
  let printAvarege = avarege(student)
  
  let result = getAvarege(student.n1, student.n2)
  
  if (result >=7) {
    alert(`${printAvarege} Parabéns ${student.name}, você passou!`)
  }else {
  alert(`${printAvarege} Não foi dessa vez, ${student.name}. Tente novamente!`)
  }
}

