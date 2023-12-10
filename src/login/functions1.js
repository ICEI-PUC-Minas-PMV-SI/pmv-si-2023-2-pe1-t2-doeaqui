const Formlogin = document.querySelector("#Formlogin")
Formlogin.addEventListener("submit", 
(e) => { 
    e.preventDefault()
const email = document.querySelector("#input_button");
const password = document.querySelector("#password");

logar(email.value, password.value)
});


function logar(email, password) {

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let usuario;
    usuarios.find(function(curUser){
        if (curUser.email == email && curUser.password == password) {
            usuario = curUser;
            localStorage.setItem("section_id", usuario.id);
            console.log("Usuário encontrado:", usuario);
            localStorage.setItem("section_id", usuario.idusuario);
            window.location.href ="../wireframe 8/index.html"; 
    };
    });
    if(usuario == null)
    {
        alert ("Usuário ou Senha não conferem. Caso não possua credencial, favor se cadastrar")
    };
};