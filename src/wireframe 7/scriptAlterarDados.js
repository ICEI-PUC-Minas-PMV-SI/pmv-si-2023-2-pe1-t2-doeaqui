document.addEventListener("DOMContentLoaded", function () {
    // Obtenha o ID do usuário da localStorage ou de onde estiver armazenado
    const userId = localStorage.getItem("section_id");

    // Verifique se o ID do usuário está disponível
    if (userId) {
        // Recupere os dados do usuário usando o ID
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuario = usuarios.find((user) => user.idusuario == userId);

        // Verifique se o usuário foi encontrado
        if (usuario) {
            // Preencha os campos com os dados do usuário
            document.getElementById("nomeONG").value = usuario.nomeONG;
            document.getElementById("CNPJ").value = usuario.cnpj;
            document.getElementById("password").value = usuario.password;
            document.getElementById("confirm_password").value = usuario.confirm_password;
            document.getElementById("CEP").value = usuario.cep;
            document.getElementById("Logradouro").value = usuario.logradouro;
            document.getElementById("Complemnto").value = usuario.Complemento;
            document.getElementById("Bairro").value = usuario.bairro;
            document.getElementById("Cidade").value = usuario.cidade;
            document.getElementById("estado").value = usuario.estado;
            document.getElementById("email").value = usuario.email;
            document.getElementById("Telefone").value = usuario.Telefone;
            document.getElementById("Facebook").value = usuario.Facebook;
            document.getElementById("Instagram").value = usuario.Instagram;
            document.getElementById("outros").value = usuario.outros;

            // Adicione manipuladores de eventos para o formulário, se necessário
            const formulario = document.getElementById("meuFormulario");
            formulario.addEventListener("submit", function (e) {
                e.preventDefault();

                // Aqui você pode implementar a lógica para salvar os dados atualizados
                // Certifique-se de adaptar conforme necessário
                salvarDadosAtualizados(userId);
            });
        } else {
            console.error("Usuário não encontrado");
        }
    } else {
        console.error("ID do usuário não disponível");
    }
});

function salvarDadosAtualizados(userId) {
    // Aqui você pode implementar a lógica para salvar os dados atualizados
    // Por exemplo, obter os valores dos campos e atualizar o objeto do usuário

    const nomeONG = document.getElementById("nomeONG").value;
    const CNPJ = document.getElementById("CNPJ").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const CEP = document.getElementById("CEP").value;
    const Logradouro = document.getElementById("Logradouro").value;
    const Complemnto = document.getElementById("Complemnto").value;
    const Bairro = document.getElementById("Bairro").value;
    const Cidade = document.getElementById("Cidade").value;
    const estado = document.getElementById("estado").value;
    const email = document.getElementById("email").value;
    const Telefone = document.getElementById("Telefone").value;
    const Facebook = document.getElementById("Facebook").value;
    const Instagram = document.getElementById("Instagram").value;
    const outros = document.getElementById("outros").value;

    // Atualize o objeto do usuário
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuarios.find((user) => user.idusuario == userId);
    if (usuario) {
        usuario.nomeONG = nomeONG;
        usuario.cnpj = CNPJ;
        usuario.password = password;
        usuario.confirm_password = confirm_password;
        usuario.cep = CEP;
        usuario.logradouro = Logradouro;
        usuario.Complemento = Complemnto;
        usuario.bairro = Bairro;
        usuario.cidade = Cidade;
        usuario.estado = estado;
        usuario.email = email;
        usuario.Telefone = Telefone;
        usuario.Facebook = Facebook;
        usuario.Instagram = Instagram;
        usuario.outros = outros;

        // Salve os dados atualizados
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        // Redirecione ou faça qualquer outra ação necessária
        window.location.href = "../wireframe 8/index.html";
    }
}
