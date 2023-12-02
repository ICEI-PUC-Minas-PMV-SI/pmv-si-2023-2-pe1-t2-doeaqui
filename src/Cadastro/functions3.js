const Formcadastro3=document.querySelector("#Formcadastro3");
Formcadastro3.addEventListener("submit",  (e) => {
    e.preventDefault(); 
const email =document.querySelector("#email") ;
const Telefone =document.querySelector("#Telefone") ;
const Facebook =document.querySelector("#Facebook") ;
const Instagram =document.querySelector("#Instagram") ;
const outros =document.querySelector("#outros") ;

localStorage.setItem("email", email.value);
localStorage.setItem("Telefone", Telefone.value);
localStorage.setItem("Facebook", Facebook.value);
localStorage.setItem("Instagram", Instagram.value);
localStorage.setItem("outros", outros.value);

proximo();

});

function proximo() {

    window.location.href ="../wireframe 8/index.html" ; 

}