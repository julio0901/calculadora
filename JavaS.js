//Deficion de constantes 
const botonNumeros = document.getElementsByName('valor-number');

const botonOpera =document.getElementsByName('valor-opera');

const botonIgual = document.getElementsByName('valor-igual')[0];

const botonBorar = document.getElementsByName('valor-borar')[0];

var result = document.getElementById('result');

//deficion de variables 
var opeActal = ''; 

var opeAnterior ='';

var operacion = undefined;


//eventos de los botones 

 botonNumeros.forEach(function(boton){
     boton.addEventListener('click',function(){
         agregarNumero(boton.innerText);
     })
 });

 botonOpera.forEach(function(boton){
    boton.addEventListener('click',function(){
        selectOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click',function(){
    calcular();
    actualizarDisplay();
});

botonBorar.addEventListener('click',function(){
    clear();
    actualizarDisplay();
});

//metodos 

function selectOperacion(op){
    if(opeActal === '') return;
    if(opeAnterior !==''){
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActal;
    opeActal = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActal);
    if(isNaN(anterior)|| isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case  '*':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return
    }
    opeActal = calculo;
    operacion = undefined;
    opeAnterior =''; 

}


function agregarNumero(num){
    opeActal = opeActal.toString() + num.toString();
    actualizarDisplay();
}

function clear(){
    opeActal = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActal;
}

clear();