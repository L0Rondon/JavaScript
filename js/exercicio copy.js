// Define o número de repetições
const qtd = parseInt(prompt("Quantos são os nomes? "))
// Armazena os nomes
var aluno = [qtd]
// Repetições
do {
    let i = 1;
    aluno[i] = prompt("Escreva o " + (i + 1) + "° nome: ");
    let text;
    if (confirm("Press a button!") == true) {
        text = "You pressed OK!";
    } else {
        text = "You canceled!";
    }
    i++;
} while (confirm = ! true);
const atual = document.getElementById('atual');
const modificado = document.getElementById('modificado');
atual.textContent = aluno.join(", ")