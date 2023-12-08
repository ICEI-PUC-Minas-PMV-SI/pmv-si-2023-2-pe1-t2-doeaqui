
const Formlogin = document.querySelector("#Formlogin")
Formlogin.addEventListener("submit", 
(e) => { 
    e.preventDefault()
const Email = document.querySelector("#Email");
const password = document.querySelector("#password");
alert(Email.value)
alert(password.value)
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let usuario = usuarios.forEach(function(usuario){
    if (usuario.email == Email.value && usuario.password == password.value) {
return usuario;
} else {
return null;
}
});
alert(usuario);

logar()
});


function logar() {

    window.location.href ="../wireframe 8/index.html"; 
};
