
document.addEventListener("DOMContentLoaded", function() {
    const editForm = document.querySelector("#editForm");
    const dadosCampanha = JSON.parse(localStorage.getItem("dadosCampanha"));
    document.querySelector("#nomeCampanha").value = dadosCampanha.nomeCampanha;
    document.querySelector("#causasApoiadas").value = dadosCampanha.causasApoiadas;
    document.querySelector("#vigencia").value = dadosCampanha.vigencia;
    document.querySelector("#itensArrecadados").value = dadosCampanha.itensArrecadados;

    editForm.addEventListener("submit", function(e) {
        e.preventDefault();
    
        dadosCampanha.nomeCampanha = document.querySelector("#nomeCampanha").value;
        dadosCampanha.causasApoiadas = document.querySelector("#causasApoiadas").value;
        dadosCampanha.vigencia = document.querySelector("#vigencia").value;
        dadosCampanha.itensArrecadados = document.querySelector("#itensArrecadados").value;
    
        localStorage.setItem("dadosCampanha", JSON.stringify(dadosCampanha));
        alert("Alterações salvas com sucesso!");
        
        console.log("Dados alterados:", dadosCampanha);
    });
});

