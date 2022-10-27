
const dato = document.querySelector(".data");

var contador = 0;

function incrementar(){
    contador++;
    if(contador > 0){
        dato.style.color = "green";
    }
    if(contador == 0){
        dato.style.color = "black";
    }
    dato.innerHTML = contador;
}

function decrementar(){
    contador--;
    if(contador < 0){
        dato.style.color = "red";
    }
    if(contador == 0){
        dato.style.color = "black";
    }
    dato.innerHTML = contador;
}

function reinicio(){
    contador = 0;
    dato.style.color = "black";
    dato.innerHTML = contador;
}