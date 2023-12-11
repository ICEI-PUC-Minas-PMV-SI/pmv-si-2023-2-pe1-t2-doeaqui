
const btnfinaizar = document.querySelector("#finalizar");
btnfinaizar.addEventListener("click", (e) => {
    e.preventDefault()


    window.location.href = "../wireframe 8/index.html";
});

const formCampanha = document.querySelector("#formcampanha");


formCampanha.addEventListener("submit", function (e) {
    e.preventDefault();

    const nomeCampanha = document.querySelector("#nomeCampanha").value;
    const causasApoiadas = document.querySelector("#causasApoiadas").value;
    const vigencia = document.querySelector("#vigencia").value;
    const itensArrecadados = document.querySelector("#itensArrecadados").value;
    // const idusuario = localStorage.getItem("section_id");
    // Coloquei pra salvar oq esta dentro do localstorage (let)
    let campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];     // Coloquei pra salvar oq esta dentro do localstorage (let)
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];    // Coloquei pra salvar oq esta dentro do localstorage (let)
    const idcampanha = campanhas.length + 1;

    const idusuario = usuarios.length

    const novaCampanha = {
        idusuario,
        idcampanha,
        nomeCampanha,
        causasApoiadas,
        vigencia,
        itensArrecadados
    };

    campanhas.push(novaCampanha);
    localStorage.clear //apaga localstorage para otimizar espaço
    localStorage.setItem("campanhas", JSON.stringify(campanhas));
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("section_id", idusuario);
    // salva a nova lista de usuarios, a lista de campnhas e a section do usuario atual tudo ja atualizado
    alert("Campanha criada com sucesso!");

    window.location.href = "../wireframe 8/index.html";

    formCampanha.reset();

});

