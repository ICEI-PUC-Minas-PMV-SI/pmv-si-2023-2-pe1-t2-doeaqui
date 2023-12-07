document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("meuFormulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        var campos = [
            "nomeONG",
            "Razao",
            "CNPJ",
            "password",
            "confirm_password",
            "CEP",
            "Logradouro",
            "Complemnto",
            "Bairro",
            "Cidade",
            "estado",
            "email",
            "Telefone",
            "Facebook",
            "Instagram",
            "outros"
        ];

        campos.forEach(function (campo) {
            var valorCampo = document.getElementById(campo).value;
            if (valorCampo !== '') {
                localStorage.setItem(campo, valorCampo);
            }
        });

        alert("Dados atualizados com sucesso!");

        // Redireciona o usuário para outra página
        window.location.href = ""; 
    });

    // Preenche os campos do formulário com os dados do localStorage
    campos.forEach(function (campo) {
        var valorCampo = localStorage.getItem(campo);
        if (valorCampo !== null) {
            document.getElementById(campo).value = valorCampo;
        }
    });
});