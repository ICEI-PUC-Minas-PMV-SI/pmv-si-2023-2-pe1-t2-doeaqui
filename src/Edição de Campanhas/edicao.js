
    const editForm = document.querySelector("#editForm");
    const queryParams = new URLSearchParams(window.location.search);
    const selectedCampaignID = queryParams.get("ID");
    let campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];
    let selectedCampaignData

    campanhas.find(function(c){
        if( c.nomeCampanha==selectedCampaignID){ 
        
        selectedCampaignData = c ;

     }}
    );

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
        campanhas.find(function(newc){
            if(selectedCampaignData.idcampanha == newc.idcampanha ){
                newc=selectedCampaignData;
             }
        });
        localStorage.removeItem(campanhas)
        localStorage.setItem("campanhas", JSON.stringify(campanhas));
                alert("Alterações salvas com sucesso!");
                
    });

