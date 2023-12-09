document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("meuFormulario");

    formulario.addEventListener("submit", function (event) {
        var senha = document.getElementById("password").value;
        var confirmarSenha = document.getElementById("confirm_password").value;

        if (senha !== confirmarSenha) {
            alert("As senhas não conferem. Por favor, tente novamente.");
            event.preventDefault();
        } else {
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
            window.location.href = "http://127.0.0.1:5500/src/wireframe%208/index.html"; 
        }

       
        campos.forEach(function (campo) {
            var valorCampo = localStorage.getItem(campo);
            if (valorCampo !== null) {
                document.getElementById(campo).value = valorCampo;
            }
        });
    });
});