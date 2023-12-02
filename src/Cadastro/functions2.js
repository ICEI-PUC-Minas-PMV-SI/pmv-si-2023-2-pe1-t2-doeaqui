
const Formcadastro2=document.querySelector("#Formcadastro2");
Formcadastro2.addEventListener("submit",  (e) => {
    e.preventDefault(); 
const CEP =document.querySelector("#CEP") ;
const Logradouro =document.querySelector("#Logradouro") ;
const Complemnto =document.querySelector("#Complemnto") ;
const Bairro =document.querySelector("#Bairro") ;
const Cidade =document.querySelector("#Cidade") ;
const estado =document.querySelector("#estado") ;

localStorage.setItem("Logradouro", Logradouro.value);
localStorage.setItem("Complemnto", Complemnto.value);
localStorage.setItem("Bairro", Bairro.value);
localStorage.setItem("Cidade", Cidade.value);
localStorage.setItem("estado", estado.value);

proximo();

});

function proximo() {

    window.location.href = "../Cadastro/FormRedeSocial.html" ; 

}