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

    const campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];
    const campanhasDropdown = document.querySelector("#campanhas");

    if (campanhas.length === 0) {
        editButton.disabled = true;
        editButton.textContent = "Não há campanhas para editar";
    } else {
        campanhas.forEach(function(campanhaID) {
            const campanhaData = JSON.parse(localStorage.getItem(campanhaID));
            const option = document.createElement("option");
            option.value = campanhaID;
            option.textContent = campanhaData.nomeCampanha;
            campanhasDropdown.appendChild(option);
        });
    }
});
