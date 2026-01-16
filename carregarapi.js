function carregarAlunos() {
    fetch("http://localhost:3000/alunos")
        .then(response => response.json())
        .then(dados => {
            const lista = document.getElementById("lista");
            lista.innerHTML = "";

            dados.forEach(aluno => {
                const li = document.createElement("li");
                li.textContent = `Nome: ${aluno.nome} | Idade: ${aluno.idade}`;
                lista.appendChild(li);
            });
        })
        .catch(erro => {
            console.error("Erro:", erro);
        });
}