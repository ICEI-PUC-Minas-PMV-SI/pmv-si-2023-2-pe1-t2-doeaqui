var valores = [
    {
        nomeONG: localStorage.getItem("nomeONG"),
        endereco: localStorage.getItem("Logradouro"),
        nomeCampanha: localStorage.getItem("nomeCampanha"),
        vigencia: localStorage.getItem("vigencia"),
        tipoDoacao: localStorage.getItem("tipoDoacao")

    }
]
const listElement = document.getElementById("locaisListCard");

function mostrarListas(valores) {
    listElement.innerHTML = "";

    for (let i = 0; i < valores.length; i++) {
        let valor = valores[i];
        listElement.innerHTML += `
        <div class="list-group-item"> 
            <span> 
                <span class="nomeLocal"> <b>Nome do Local:</b> ${valor.nomeONG} </span>
                <br>
                <span class="nomeCampanha"> <b>Nome da Campanha:</b> ${valor.nomeCampanha} </span>
                <br>
                <span class="endereco"> <b>Endereço:</b> ${valor.endereco} </span>
                <br>
                <span class="vigencia"> <b>Vigência:</b> ${valor.vigencia} </span> 
                <br>
                <span class="tipoDoacao"> <b>Tipo de Doação:</b> ${valor.tipoDoacao} </span>
            </span>
        </div>
    `;
    }
}

mostrarListas(valores);

// function exibirContatos() {
//     getValues();

//     locaisListCard = document.getElementById("locaisListCard");

//     locaisListCard.innerHTML = "";

//     readContato(dados => {
//         for (let i = 0; i < dados.length; i++) {
//             let contato = dados[i];
//             locaisListCard.innerHTML += `
//                 <div class="#locaisListCard"> 
//                     <span> 
//                         <span> ${contato[i].nomeONG} </span>
//                         <span> ${contato[i].endereco} </span>
//                         <span> ${contato[i].distancia} </span>
//                         <span> ${contato[i].horarioFuncionamento} </span>
//                     </span>
//                 </div>
//             `;
//         }
//     })


// }
console.log(valores);
// const nomeONGElement = document.querySelector("#nomeLocal");
//         nomeONGElement.textContent = valores.map(valores => valores.nomeONG);

//         const nomeCampanhaElement = document.querySelector("#nomeCampanha");
//         nomeCampanhaElement.textContent = valores.map(valores => valores.nomeCampanha);

//         const nomeEnderecoElement = document.querySelector("#endereco");
//         nomeEnderecoElement.textContent = valores.map(valores => valores.endereco);

//         const vigenciaElement = document.querySelector("#vigencia");
//         vigenciaElement.textContent = valores.map(valores => valores.vigencia);

//         const tipoDoacaoElement = document.querySelector("#tipoDoacao");
//         tipoDoacaoElement.textContent = valores.map(valores => valores.tipoDoacao);