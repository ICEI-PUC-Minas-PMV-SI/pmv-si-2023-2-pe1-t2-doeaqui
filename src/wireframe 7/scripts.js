document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("meuFormulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        var senhaAtual = localStorage.getItem("password"); 
        var senhaInserida = document.getElementById("password").value;
        if (senhaInserida != senhaAtual) {
            alert("Senha atual incorreta!");
            return;
        }

        var nomeUsuario = document.getElementById("NomeDaONG").value;
        var senha = document.getElementById("password").value;
        var confirmSenha = document.getElementById("newpassword").value;
        var cnpj = document.getElementById("CNPJ").value;
        var cep = document.getElementById("CEP").value;
        var endereco = document.getElementById("localizaçaoendereco").value;
        var email = document.getElementById("email").value;
        var telefone = document.getElementById("telefone").value;
        var redesSociais = document.getElementById("RedesSocial").value;
        var descricaoTrabalho = document.getElementById("CausasqueapoiaDescriçãodotrabalho").value;
        var nomeRazaoSocial = document.getElementById("insiranomerazaosocial").value;
        var camposOrdenados = [
            "NomeDaONG",
            "password",
            "newpassword", 
            "CNPJ",
            "CEP",
            "localizaçaoendereco",
            "email",
            "telefone",
            "RedesSocial",
            "CausasqueapoiaDescriçãodotrabalho",
            "insiranomerazaosocial",
        ];

        var dadosFormulario = {};
        camposOrdenados.forEach(function (campo) {
            dadosFormulario[campo] = document.getElementById(campo).value;
        });

        Object.keys(dadosFormulario).forEach(function (chave) {
            var valor = dadosFormulario[chave];
            localStorage.setItem(chave, valor);
        });

        alert("Dados salvos com sucesso!");

        // Redireciona o usuário para outra página
        window.location.href = "";
    });
});



