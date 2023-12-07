
function getStoredCampanhas() {
    const campanhas = JSON.parse(localStorage.getItem('campanhas'));
    return campanhas || []; 
}

function populateCampaignDropdown() {
    const campanhas = getStoredCampanhas();
    const dropdown = document.getElementById('campaignDropdown');

    dropdown.innerHTML = '';

    campanhas.forEach((campanha, index) => {
        const option = document.createElement('option');
        option.value = index; 
        option.textContent = campanha.nomeCampanha;
        dropdown.appendChild(option);
    });
}


document.getElementById('deleteButton').addEventListener('click', function() {
    populateCampaignDropdown();
});


document.getElementById('confirmDelete').addEventListener('click', function() {
    const selectedIndex = document.getElementById('campaignDropdown').value;
    const campanhas = getStoredCampanhas();

    if (selectedIndex !== '') {
        campanhas.splice(selectedIndex, 1); 
        localStorage.setItem('campanhas', JSON.stringify(campanhas));
        alert('Campanha excluída com sucesso!');
        populateCampaignDropdown(); 

  window.location.reload();
    } else {
        alert('Por favor, selecione uma campanha para excluir.');
    }
});
