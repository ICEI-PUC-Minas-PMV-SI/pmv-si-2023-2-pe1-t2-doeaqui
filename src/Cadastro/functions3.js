const Formcadastro3=document.querySelector("#Formcadastro3");
Formcadastro3.addEventListener("submit",  (e) => {
    e.preventDefault(); 
const nomeONG = localStorage.getItem("nomeONG");
const cnpj = localStorage.getItem("CNPJ");
const password = localStorage.getItem("password");
const confirm_password = localStorage.getItem("confirm_password");
const cep = localStorage.getItem("CEP");
const logradouro = localStorage.getItem("Logradouro");
const Complemento = localStorage.getItem("Complemento");
const bairro = localStorage.getItem("Bairro");
const cidade = localStorage.getItem("Cidade");
const estado = localStorage.getItem("estado");
localStorage.setItem( "email", document.querySelector("#email").value)
const email = localStorage.getItem("email");
localStorage.setItem( "Telefone", document.querySelector("#Telefone").value)
const Telefone = localStorage.getItem("Telefone");
localStorage.setItem( "Facebook", document.querySelector("#Facebook").value)
const Facebook = localStorage.getItem("Facebook");
localStorage.setItem( "Instagram", document.querySelector("#Instagram").value)
const Instagram = localStorage.getItem("Instagram");
localStorage.setItem( "outros", document.querySelector("#outros").value)
const outros = localStorage.getItem("outros");

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuario = {
            id: usuarios.length + 1, // ID único baseado na quantidade de usuários cadastrados
nomeONG,
cnpj,
password,
confirm_password,
cep,
logradouro,
Complemento,
bairro,
cidade,
estado,
email,
Telefone,
Facebook,
Instagram,
outros,
        };
        
localStorage.clear();
usuarios.push(usuario);
localStorage.setItem("usuarios", JSON.stringify(usuarios));
proximo();

});

function proximo() {

    window.location.href ="../wireframe 8/index.html" ; 

}