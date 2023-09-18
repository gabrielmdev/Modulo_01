const notaAluno01 = parseFloat(prompt("Digite a nota do primeiro aluno: "));
const notaAluno02 = parseFloat(prompt("Digite a nota do primeiro aluno: "));

const media = (notaAluno01 + notaAluno02) / 2;

if (media === 10) {
    console.log("Aprovado com Distinção!");
} else if (media >= 7) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado!")
}