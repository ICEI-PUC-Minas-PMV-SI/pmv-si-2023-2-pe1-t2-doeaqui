

    const password = document.querySelector("#password");
    const confirm_password = document.querySelector("#confirm_password");
    const btn_proximo1= document.querySelector("#btn_proximo1");
    btn_proximo1.addEventListener("click", proximo);

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

    window.location.href ="../Cadastro/index2.html"; 

}








