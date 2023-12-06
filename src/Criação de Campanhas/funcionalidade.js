
document.addEventListener("DOMContentLoaded", function() {
    const formCampanha = document.querySelector("form");
    formCampanha.addEventListener("submit", function(e) {
        e.preventDefault();

        const nomeCampanha = document.querySelector("#nomeCampanha").value;
        const causasApoiadas = document.querySelector("#causasApoiadas").value;
        const vigencia = document.querySelector("#vigencia").value;
        const itensArrecadados = document.querySelector("#itensArrecadados").value;

        const dadosCampanha = {
            nomeCampanha,
            causasApoiadas,
            vigencia,
            itensArrecadados
        };

        localStorage.setItem("dadosCampanha", JSON.stringify(dadosCampanha));

        alert("Campanha criada com sucesso!");
        formCampanha.reset();
    });
});
