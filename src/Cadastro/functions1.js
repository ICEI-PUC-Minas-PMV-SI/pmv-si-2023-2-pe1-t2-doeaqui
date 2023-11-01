

    const password = document.querySelector("#password");
    const confirm_password = document.querySelector("#confirm_password");
    const FormUsuario= document.querySelector("#FormUsuario");
    FormUsuario.addEventListener("click", proximo);

    function senha()
{ 
    if (password.value === confirm_password.value) { // Senhas correspondem, nenhum feedback é exibido.
        alert( 'senhas  conferem');
        return true; 
    } 
    else{ alert("senhas não conferem");
    return false;}
};

// Adicione um ouvinte de evento para validar as senhas ao enviar o formulário



function proximo() {

    window.location.href ="../Cadastro/FormEndereco.html"; 

}








