document.addEventListener("DOMContentLoaded", function() {
    const editForm = document.querySelector("#editForm");
    const selectCampaign = document.querySelector("#selectCampaign");
    const editButton = document.querySelector("#editButton");

    editButton.addEventListener("click", function() {
        const selectedCampaignID = document.querySelector("#campanhas").value;

        if (!selectedCampaignID) {
            alert("Não existem campanhas criadas para edição.");
            return;
        }

        const selectedCampaignData = JSON.parse(localStorage.getItem(selectedCampaignID));

        if (!selectedCampaignData) {
            alert("Campanha selecionada não encontrada.");
            return;
        }

        document.querySelector("#nomeCampanha").value = selectedCampaignData.nomeCampanha;
        document.querySelector("#causasApoiadas").value = selectedCampaignData.causasApoiadas;
        document.querySelector("#vigencia").value = selectedCampaignData.vigencia;
        document.querySelector("#itensArrecadados").value = selectedCampaignData.itensArrecadados;


        selectCampaign.style.display = "none";
        editForm.style.display = "block";
    });
});
