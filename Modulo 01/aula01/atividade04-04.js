const salario = parseFloat(prompt("Digite o salario do colaborador: "));

if (salario >= 1500) {
  const soma = salario * 1.05;
  console.log("Salario com aumento: ",soma);
} else if (salario > 700 && salario < 1500 ) {
  const soma = salario * 1.10;
  console.log("Salario com aumento: ",soma);
} else if (salario >= 280 && salario < 700) {
  const soma = salario * 1.15;
  console.log("Salario com aumento: ", soma);
} else {
  const soma = salario * 1.20;
  console.log("Salario com aumento: ",soma);
}