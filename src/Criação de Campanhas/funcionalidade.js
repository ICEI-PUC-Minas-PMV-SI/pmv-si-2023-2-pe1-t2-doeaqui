
document.addEventListener("DOMContentLoaded", function() {
    const formCampanha = document.querySelector("form");
    
    formCampanha.addEventListener("submit", function(e) {
        e.preventDefault();

        const nomeCampanha = document.querySelector("#nomeCampanha").value;
        const causasApoiadas = document.querySelector("#causasApoiadas").value;
        const vigencia = document.querySelector("#vigencia").value;
        const itensArrecadados = document.querySelector("#itensArrecadados").value;

        const novaCampanha = {
            nomeCampanha,
            causasApoiadas,
            vigencia,
            itensArrecadados
        };

        const campanhaID = `campanha_${Date.now()}`;

        let campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];

        campanhas.push(campanhaID);

        localStorage.setItem(campanhaID, JSON.stringify(novaCampanha));

        localStorage.setItem("campanhas", JSON.stringify(campanhas));

        alert("Campanha criada com sucesso!");
        formCampanha.reset();
    });
});
