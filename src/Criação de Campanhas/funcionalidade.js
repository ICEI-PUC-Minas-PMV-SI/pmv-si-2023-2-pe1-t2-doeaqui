document.getElementById("formCampanha").addEventListener("submit", function(e) {
    e.preventDefault();

    const nomeCampanha = document.getElementById('nomeCampanha').value;
    const causasApoiadas = document.getElementById('causasApoiadas').value;
    const vigencia = document.getElementById('vigencia').value;
    const itensArrecadados = document.getElementById('itensArrecadados').value;

    const campanha = {
        "nomeCampanha": nomeCampanha,
        "causasApoiadas": causasApoiadas,
        "vigencia": vigencia,
        "itensArrecadados": itensArrecadados
    };
    
    const campanhaJSON = JSON.stringify(campanha);
    console.log(campanhaJSON);
    // Aqui você pode enviar ou armazenar campanhaJSON como necessário
});