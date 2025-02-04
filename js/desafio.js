// Define o número de repetições
const qtd = parseInt(prompt("Quantos são os nomes? "))
// Armazena os nomes
        var aluno = [qtd]
        // Repetições
        for(let i = 0; i < qtd; i++ ){
            aluno [i] = prompt("Escreva o "+ (i+1) + "° nome: ")
        }
const atual = document.getElementById('atual');
const modificado = document.getElementById('modificado');        
atual.textContent = aluno.join(", ")