document.addEventListener('DOMContentLoaded', () => {//Cuando se cargue el Dom se ejecute la funcion anonima
    let numeroMes; // variable numero que ingresa el usuario que equivale a los meses del año
        valor = window.prompt(`Introduce un numero del 1 al 12.`); // donde ingresa el valor en string        
        numeroMes = parseInt(valor);// entra como string y se pasa a entero
    let meses = [31, 28, 31,30,31,30,31,31,30,31,30,31]; // array con el numero de dias por mes
        if(numeroMes>0 && numeroMes<=12){// verificamos que el numero se encuentre entre 1 y 12
            document.getElementById("ejercicio1").innerHTML = (`El més ${numeroMes} tiene ${meses[numeroMes-1]} dias.`); // se imprimer el valor de dias de acuerdo al mes que coloco el
        }else{document.getElementById("ejercicio1").innerHTML =("Introduzca un numero entre 1 y 12");}// si no se imprimer el mensaje de error
});

