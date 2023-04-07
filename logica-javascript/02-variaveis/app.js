const formQuestionario = document.querySelector("#form-questionario");

formQuestionario.addEventListener("submit", (event) => {
    // Impedir que o formulário seja enviado automaticamente
    event.preventDefault();

    //Coletar os valores dos campos de entrada do formulário
    const nome = document.querySelector("#nome").value;
    const idade = document.querySelector("#idade").value;
    const linguagem = document.querySelector("#linguagem").value;

    console.log(nome);
    console.log(idade);
    console.log(linguagem);

    // Exibir mensagem com os dados do formulário
    const resposta = document.querySelector("#resposta");
    resposta.innerHTML = `Meu nome é <strong>${nome}</strong> eu tenho ${idade} anos e estou estudando ${linguagem}.`;

});