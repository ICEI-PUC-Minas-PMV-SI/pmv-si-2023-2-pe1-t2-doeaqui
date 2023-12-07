document.addEventListener("DOMContentLoaded", function() {
    const editForm = document.querySelector("#editForm");
    const queryParams = new URLSearchParams(window.location.search);
    const selectedCampaignKey = queryParams.get("ID");
    const selectedCampaignData = JSON.parse(localStorage.getItem(selectedCampaignID));

    document.querySelector("#nomeCampanha").value = selectedCampaignData.nomeCampanha;
    document.querySelector("#causasApoiadas").value = selectedCampaignData.causasApoiadas;
    document.querySelector("#vigencia").value = selectedCampaignData.vigencia;
    document.querySelector("#itensArrecadados").value = selectedCampaignData.itensArrecadados;

    editForm.addEventListener("submit", function(e) {
        e.preventDefault();

        selectedCampaignData.nomeCampanha = document.querySelector("#nomeCampanha").value;
        selectedCampaignData.causasApoiadas = document.querySelector("#causasApoiadas").value;
        selectedCampaignData.vigencia = document.querySelector("#vigencia").value;
        selectedCampaignData.itensArrecadados = document.querySelector("#itensArrecadados").value;

        localStorage.setItem(selectedCampaignID, JSON.stringify(selectedCampaignData));
        alert("Alterações salvas com sucesso!");
    });
});