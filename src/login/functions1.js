
const Formlogin = document.querySelector("#Formlogin")
Formlogin.addEventListener("submit", 
(e) => { 
    e.preventDefault()
const Email = document.querySelector("#Email");
const password = document.querySelector("#password");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let usuario = usuarios.find(u => u.email=== Email.value); 
console.log(usuario);
if (usuario.password === password.value) {
    alert("funfou e tudo igual");
    } else {
    alert("não encontrado");
    };

logar()
});


function logar() {

    window.location.href ="../wireframe 8/index.html"; 
};
