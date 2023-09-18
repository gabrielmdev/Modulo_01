const turno = prompt("Digite o turno que estuda: ");

if (turno === 'Manhã' || turno === 'manhã' || turno === 'manha') {
  console.log("Bom dia!");
} else if (turno === 'Tarde' || turno === 'tarde') {
  console.log("Boa tarde!");
} else if (turno === "Noite" || turno === 'noite') {
  console.log("Boa noite!");
} else {
  console.log("ERROR: Não pertence a um turno!");
}