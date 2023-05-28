
function controlloCredenziali(event){

    if(form.user.value===""||form.password.value===""){
        alert("Inserire tutte le credenziali");
        event.preventDefault();
    }
}


const form=document.querySelector("#form");
form.addEventListener("submit",controlloCredenziali);
