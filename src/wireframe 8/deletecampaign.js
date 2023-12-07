document.addEventListener("DOMContentLoaded", function() {
    const deleteButton = document.querySelector("#deleteButton");

    deleteButton.addEventListener("click", function() {
        const campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];
        const campanhaSelecionada = prompt("Selecione a campanha que quer excluir:");

        if (campanhaSelecionada) {
            const confirmDelete = confirm(`Tem certeza de que deseja excluir a campanha "${campanhaSelecionada}"?`);

            if (confirmDelete) {
                const campanhaEncontrada = campanhas.find(campanhaID => {
                    const campanhaData = JSON.parse(localStorage.getItem(campanhaID));
                    return campanhaData.nomeCampanha === campanhaSelecionada;
                });

                if (campanhaEncontrada) {
                    localStorage.removeItem(campanhaEncontrada);
                    const updatedCampanhas = campanhas.filter(id => id !== campanhaEncontrada);
                    localStorage.setItem("campanhas", JSON.stringify(updatedCampanhas));

                    alert(`Campanha "${campanhaSelecionada}" excluída com sucesso!`);
                } else {
                    alert(`A campanha "${campanhaSelecionada}" não foi encontrada.`);
                }
            }
        } else {
            alert("Por favor, Selecione a campanha que quer excluir.");
        }
    });
});
