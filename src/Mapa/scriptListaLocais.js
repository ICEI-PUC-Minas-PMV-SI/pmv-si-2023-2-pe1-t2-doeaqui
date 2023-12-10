const listElement = document.getElementById("locaisListCard");
const campanha = JSON.parse(localStorage.getItem("campanhas"));
const usuario = JSON.parse(localStorage.getItem("usuarios"));

const idcampanha = campanha.map(function (campanha) {
    return campanha.idUsuario;
})

const idUsuario = usuario.map(function (usuario) {
    return usuario.idusuario;
})

const valoresCampanha = campanha.map(function (campanha) {
    return {
        idUsuario: campanha.idusuario,
        nomeCampanha: campanha.nomeCampanha,
        vigencia: campanha.vigencia,
        itensArrecadados: campanha.itensArrecadados
    }
})

const valoresUsuario = usuario.map(function (usuario) {
    return {
        idUsuario: usuario.idusuario,
        nomeONG: usuario.nomeONG,
        endereco: usuario.logradouro
    }
})

const valoresConcatenados = valoresCampanha.map(campanha => {
    const usuario = valoresUsuario.map(function (usuario) {
        if (campanha.idUsuario == usuario.idUsuario) {
            return usuario;
        }
    }).filter(usuario => usuario != undefined)[0];
    if (usuario) {
        return {
            ...campanha,
            ...usuario
        };
    } else {
        return campanha;
    }
});


function listarUsuario() {
    listElement.innerHTML = "";

    for (let i = 0; i < valoresConcatenados.length; i++) {
        let valor = valoresConcatenados[i];
        listElement.innerHTML += `
        <div class="list-group-item">
            <span>
                <span class="nomeLocal"> <b>Nome do Local:</b> ${valor.nomeONG} </span>
                <br>
                <span class="endereco"> <b>Endereço:</b> ${valor.endereco} </span>
                <br>
                <span class="nomeCampanha"> <b>Nome da Campanha:</b> ${valor.nomeCampanha} </span>
                <br>
                <span class="vigencia"> <b>Vigência:</b> ${valor.vigencia} </span>
                <br>
                <span class="tipoDoacao"> <b>Tipo de Doação:</b> ${valor.itensArrecadados} </span>
            </span>
        </div>
        `;
    }
}

listarUsuario();
// function listarCampanhasuarios(campanhas) {

//     for (let i = 0; i < campanhas.length; i++) {
//         let valor = campanhas[i];
//         listElement.innerHTML += `
//         <div class="list-group-item">
//             <span>
//                 <span class="nomeCampanha"> <b>Nome da Campanha:</b> ${valor.nomeCampanha} </span>
//                 <br>
//                 <span class="vigencia"> <b>Vigência:</b> ${valor.vigencia} </span>
//                 <br>
//                 <span class="tipoDoacao"> <b>Tipo de Doação:</b> ${valor.itensArrecadados} </span>
//             </span>
//         </div>
//     `;
//     }
// }

// listarCampanhasuarios(valoresCampanha);
// listarCampanhasuarios(valoresCampanha);
// function mostrarListas(valores) {
//     listElement.innerHTML = "";

//     for (let i = 0; i < valores.length; i++) {
//         let valor = valores[i];
//         listElement.innerHTML += `
//         <div class="list-group-item">
//             <span>
//                 <span class="nomeLocal"> <b>Nome do Local:</b> ${valor.nomeONG} </span>
//                 <br>
//                 <span class="nomeCampanha"> <b>Nome da Campanha:</b> ${valor.nomeCampanha} </span>
//                 <br>
//                 <span class="endereco"> <b>Endereço:</b> ${valor.logradouro} </span>
//                 <br>
//                 <span class="vigencia"> <b>Vigência:</b> ${valor.vigencia} </span>
//                 <br>
//                 <span class="tipoDoacao"> <b>Tipo de Doação:</b> ${valor.itensArrecadados} </span>
//             </span>
//         </div>
//     `;
//     }
// }
// mostrarListas(valores);