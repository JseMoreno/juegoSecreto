let numeroSecreto = generaNumeroSecreto(); // declarar una  variable que se llame numero secreto

console.log(numeroSecreto);


//let titulo = document.querySelector('h1');// paarmetro cual es el selector que vamos a usar //
//titulo.innerHTML = 'Juego del numero secreto '; // esta linea retornaria el elemento que tenemos en el h1,debemos tomar ese valor y asugnarlo a una variable
                                                // es un objeto que definen su compartimiento
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

//function asignarTextoElemento(){ // funcion recibe parametros para utilizarla n veces 
function asignarTextoElemento(elemento, texto){  // declaro una funcion y le agrego un parametro al parentesis 
    //let titulo = document.querySelector('h1');
    //let titulo = document.querySelector(elemento);// expicito a cual elemento se utiliza 
    let elementoHTML = document.querySelector(elemento);
    //titulo.innerHTML = 'Juego del numero secreto  actuzlizado';
    elementoHTML.innerHTML = texto; // alas etiquetas h1 h2
    return; //retorno de la funcion retornar el numero secreto
}

// una funcion tiene varias formas de representarse en javascript//
function intentoUsuario(){ // function palabra reservada las llaves encapsulan la accion que queremos que haga en este caso validar el intento de usuario
                                // en el html estamos llamando ala funcion que vamos a definir y declararla en js la funcion es un encapsulacion de una accion que queremos que haga
    alert('click desde el boton'); 
    return;                        
}   
function  generaNumeroSecreto(){
    //let numeroSecreto = Math.floor(Math.random()*10)+1; // retorna un numero decimal  y llamamos al metdo math.floor para retornar solo la parte dedimal 
    return Math.floor(Math.random()*10)+1;
    //return numeroSecreto;  // regresar un valor el numero secreto 
}


asignarTextoElemento('h1' , 'Juego del numero secreto!'); // estoy llamando ala funcion el nombre de la funcion dentro de JS 
// se puede en HTML solo en eventos 
asignarTextoElemento('p','Indica un numero del 1 al 10'); //  se quita la variable declarada //let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

// la funcion se creo 
//se elimino toda la declaracion de variable y llamda al document encapsulo una funcion/ la  invocon de la funcion 2 veces  