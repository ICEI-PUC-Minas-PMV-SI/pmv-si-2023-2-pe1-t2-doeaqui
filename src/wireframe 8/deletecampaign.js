
function getStoredCampanhas() {
    const campanhas = JSON.parse(localStorage.getItem('campanhas'));
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
}


document.getElementById('deleteButton').addEventListener('click', function() {
    populateCampaignDropdown();
});


document.getElementById('confirmDelete').addEventListener('click', function() {
    const selectedCampaignId = document.getElementById('campaignDropdown').value;
 
    if (selectedCampaignId !== '') {
        localStorage.removeItem(selectedCampaignId);
 
        const campaigns = JSON.parse(localStorage.getItem('campanhas')) || [];
        const campaignIndex = campaigns.indexOf(selectedCampaignId);
 
        if (campaignIndex !== -1) {
            campaigns.splice(campaignIndex, 1);
            localStorage.setItem('campanhas', JSON.stringify(campaigns));
        }
 
        alert('Campanha excluída com sucesso!');
        window.location.reload();
    } else {
        alert('Por favor, selecione uma campanha para excluir.');
    }
 });
