
let numeroSecreto  = 0 ;
let intentos = 0 ;
let listaNumerosSorteados = [];  // declara la lista de numeros sorteados lamacenando uno de los numeros para no volverlos a jugar 
let numeroMaximo = 10; 

function asignarTextoElemento(elemento, texto){  
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}
function verificarIntento(){  
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); 

if (numeroUsuario === numeroSecreto){
    asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); 
    document.getElementById('reiniciar').removeAttribute('disabled');
}else{ 
    
    if (numeroUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es menor');  
    }else{
        asignarTextoElemento('p', 'El numero secreto es mayor');
    }
    intentos ++; 
    limpiarCaja(); 
    }
    return;    

} 

function limpiarCaja(){ 
  document.querySelector('#valorUsuario').value = '';  
  
}

function  generaNumeroSecreto(){  // funcion donde vamos a almacenar la lista // metodo push // 
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; // crear una funcion y preguntar a ese numero generado esta en la lista 

    console.log(numeroGenerado); 
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos lo snumeros 
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
    //si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){  // si el numero generado no esta en la lista yo puedo jugar // como saber si esta incluido o no hay un metodo en javascrpit que se llama include barre los registros y checa   y se pasa como parametro el numero a checar// si el numero generado no esta en la lista yo puedo jugar
        return  generaNumeroSecreto(); 
        } else{  
            listaNumerosSorteados.push(numeroGenerado);// adicionalmente debemos de guardar la lista para que no nos vuelva a salir el numero// El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
            return numeroGenerado;
        }       
    
    }
}
function condicionesIniciales(){ 
    asignarTextoElemento('h1','Juego del numero secreto!'); 
    asignarTextoElemento('p',`Indica un numero del 1 al  ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto(); 
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();  
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}


condicionesIniciales();