function getStoredCampanhas() {
    const campanhas = JSON.parse(localStorage.getItem('campanhas'));
    console.log('Campanhas recuperadas:', campanhas); 
    return campanhas || [];
}

function populateCampaignDropdown() {
    const campanhas = getStoredCampanhas();
    const dropdown = document.getElementById('campaignDropdown');

    dropdown.innerHTML = '';

    campanhas.forEach((campanha, campanhaID) => {
        const option = document.createElement('option');
        option.value = campanhaID;
        option.textContent = campanha.nomeCampanha;
        dropdown.appendChild(option);
    });

    console.log('Dropdown populado com campanhas:', campanhas); 
}

document.getElementById('deleteButton').addEventListener('click', function() {
    console.log('Botão de exclusão clicado.'); 
    populateCampaignDropdown();
});

document.getElementById('confirmDelete').addEventListener('click', function() {
    console.log('Botão de confirmação de exclusão clicado.'); 
    const selectedCampaignId = document.getElementById('campaignDropdown').value;
    const campanhas = getStoredCampanhas();

    if (selectedCampaignId !== '') {
        localStorage.removeItem(selectedCampaignId);

        const campaigns = JSON.parse(localStorage.getItem('campanhas')) || [];
        const campaignIndex = campaigns.indexOf(selectedCampaignId);

        if (campaignIndex !== -1) {
            campaigns.splice(campaignIndex, 1);
            localStorage.setItem('campanhas', JSON.stringify(campaigns));
            alert('Campanha excluída com sucesso!');
            window.location.reload();
        } else {
            alert('A campanha não foi encontrada no registro de campanhas.');
        }
    } else {
        alert('Por favor, selecione uma campanha para excluir.');
    }
});
