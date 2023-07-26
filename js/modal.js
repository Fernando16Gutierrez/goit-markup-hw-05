let cerrar = document.querySelectorAll(".data-modal-close")[0];
let abrir = document.querySelectorAll(".data-modal-open")[0];
let modal = document.querySelectorAll(".modal")[0];
let dataM = document.querySelectorAll(".data-modal")[0];

abrir.addEventListener("click", function(e){
e.preventDefault();
// @ts-ignore
dataM.style.opacity = "1";
// @ts-ignore
dataM.style.visibility = "visible";
modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");

    setTimeout(function(){
    // @ts-ignore
        dataM.style.opacity = "0";
        // @ts-ignore
        dataM.style.visibility("hidden");
    }, 1000)
    } )
    

    