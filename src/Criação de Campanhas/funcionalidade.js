

const formCampanha= document.querySelector("formCampanha");
formCampanha.addEventListener("submit", (e) => {
    e.preventDefault();
    const nomeCampanha = document.querySelector("nomeCampanha") ;
    const causasApoiadas = document.querySelector("causasApoiadas") ;
    const vigencia = document.querySelector("vigencia") ;
    const itensArrecadados = document.querySelector("itensArrecadados") ;
    localStorage.setItem("nomeCampanha", nomeCampanha.value);
    localStorage.setItem("causasApoiadas", causasApoiadas.value);
    localStorage.setItem("vigencia",vigencia.value);
    localStorage.setItem("itensArrecadados",itensArrecadados.value);

});