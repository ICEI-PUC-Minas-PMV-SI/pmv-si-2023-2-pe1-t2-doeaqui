

  
    const Formcadastro= document.querySelector("#Formcadastro");
    Formcadastro.addEventListener("submit", (e) => {
        e.preventDefault();
        const nomeONG =  document.querySelector("#nomeONG") ;
        const Razao = document.querySelector ("#Razao"); 
        const CNPJ = document.querySelector("#CNPJ");
        const password = document.querySelector("#password");
        const confirm_password = document.querySelector("#confirm_password");
    localStorage.setItem("nomeONG", nomeONG.value);
    localStorage.setItem("Razao", Razao.value);
    localStorage.setItem("CNPJ",CNPJ.value);
    localStorage.setItem("password",password.value);
    localStorage.setItem("confirm_password",confirm_password.value);

    proximo(password.value, confirm_password.value);
    });

function proximo(password, confirm_password) {
    { 
        if (password=== confirm_password) { // Senhas correspondem, nenhum feedback é exibido.
            alert( 'senhas  conferem');
            window.location.href ="../Cadastro/FormEndereco.html"; 
            return true; 
        }
        else{ alert("senhas não conferem");
        return false;}
    };

};
