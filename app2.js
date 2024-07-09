//let numeroSecreto = generaNumeroSecreto(); // declarar una  variable que se llame numero secreto
let numeroSecreto  = 0 ;
//let intentos = 1 ;// agregar un contador de numero de intentos 
let intentos = 0 ;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){  // declaro una funcion y le agrego un parametro al parentesis 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; // alas etiquetas h1 h2
    return; //retorno de la funcion retornar el numero secreto
}
function verificarIntento(){  // capturar lo que el usuario escribio para ello vamos a usar una variable
    //alert('click desde el boton'); 
    //let numeroUsuario = document.querySelector('input');  // vamos a usar otra funcion de javascript que cada input tenganun identificador
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);  // seguir usando el query selector pero hay  otra funcion solo para buscar por id 
    console.log(intentos); // mostrar como van los intentos 

if (numeroUsuario === numeroSecreto){
    asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`); // operador ternario para cambiar la condicion de impresion a vez!!! el ? es un if y vecec// de entro de una funcion estamos llamando otra funcion
    document.getElementById('reiniciar').removeAttribute('disabled');
}else{  
    // el usuario no acerto 
    if (numeroUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es menor');  // usar el tempalte string  dentro de los parametros
    }else{
        asignarTextoElemento('p', 'El numero secreto es mayor');
    }
    intentos ++; 
    limpiarCaja(); // invocando la funcion de limpiar caja
}
    // console.log(typeof(numeroUsuario));
    //console.log(numeroSecreto);  // para ver el numero secreto ponemos el console.log
    // console.log(typeof(numeroSecreto));
    // console.log(numeroUsuario);
    //console.log(numeroUsu]ario === numeroSecreto); // el === dice que tiene quie ser igual en valor y tipo de dato nos va a retornar un boolean 
    return;    // retorna un boolean          //  obtener el elemento por el id , queremos el valor por eso le vamos a poner un punto         
} 
// funcion siempre deben de ir afuera de la condicion, para // vamos a usar una funcionque limpie 
function limpiarCaja(){ // obtener el elemento se usa el document
  //let valorCaja = document.querySelector('#valorUsuario').value = ' '; // mostrar el query selector por id se usa el # y el id del input// nos da opcion el query selector o get element byid
    document.querySelector('#valorUsuario').value = ' ';  
  //valorCaja.value = ' '; //se va a cambiar el .value = ' '; para el document y se quita la funcion de valor caja
}

function  generaNumeroSecreto(){  
    return Math.floor(Math.random()*10)+1;
    //return numeroSecreto;  // regresar un valor el numero secreto 
}
function condicionesIniciales(){ // encapsular los mensajes el titulo y el intervalo
    asignarTextoElemento('h1' , 'Juego del numero secreto!'); 
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    numeroSecreto = generaNumeroSecreto(); 
    intentos = 1;
}

function reiniciarJuego(){
    // limpiar la caja
    limpiarCaja();  // llamar ala funcion limpiar caja
    // indicar mensaje de intervalo de numero 
    condicionesIniciales();
   //  asignarTextoElemento('p','Indica un numero del 1 al 10'); // se va a colocar en una funcion
    // Generar el numero aleatorio
    //numeroSecreto = generaNumeroSecreto(); 
    // Inicializar el numero de intentos
    //intentos = 1;
    // Deshabilitar el botn de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

//asignarTextoElemento('h1' , 'Juego del numero secreto!'); // estoy llamando ala funcion el nombre de la funcion dentro de JS 
// se puede en HTML solo en eventos 
//asignarTextoElemento('p','Indica un numero del 1 al 10'); //  se quita la variable declarada //let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';
mensajesIniciales(); // cuando  
condicionesIniciales();