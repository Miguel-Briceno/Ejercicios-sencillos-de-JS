document.addEventListener('DOMContentLoaded', () => {//Cuando se cargue el Dom se ejecute la funcion anonima
    function operaciones(opcion){//se crea una funcion operaciones con un parametro opcion
        let x;//variable x
        let y; // variable y
        // se piden por consola las variables 
        let valor = window.prompt("Introduce un número que va a ser el valor x");
        x=parseInt(valor);// se pasan los valores que vienen como string a enteros
        valor = window.prompt("Introduce un número que va a ser el valor y");
        y=parseInt(valor);
        if(Number(x)&& Number(y)){// se comprueba que sea numeros            
            switch(opcion){// se realiza un switch, como condicion recibe una opcion, las opciones obedencen 
                //a cada caso y en los casos se selecciona el elemento html y se le pasa un resultado
                case "sumar":
                    document.getElementById('ejercicio2').innerHTML= ("La suma es: "+ (x+y));
                    break;
                case "restar":
                    document.getElementById('ejercicio2').innerHTML=( "La resta es: "+ (x-y));
                    break;
                case "multiplicar":
                    document.getElementById('ejercicio2').innerHTML=( "El producto es: "+ (x*y));
                    break;
                case "potencia":
                    document.getElementById('ejercicio2').innerHTML=( "La potencia es: "+ Math.pow(x,y));
                    break;
                default:
                    document.getElementById('ejercicio2').innerHTML=( "Opción no válida");// en el caso que no sea una opcion valida
                    break;
            }

        }else{document.getElementById('ejercicio2').innerHTML=("Debe introducir valores validos")} //en el caso que no sean validos los numeros

    }
    // a continuación se hace la seleccion de cada elemento del html(button) y se le asigna un escuchador de eventos
    // si se realiza un click sobre el boton se llama la funcion operaciones y se le pasa un parametro esto se realiza a traves de
    // de una funcion anonima
    document.getElementById('sumar').addEventListener('click',()=>operaciones('sumar'));
    document.getElementById('restar').addEventListener('click',()=>operaciones('restar'));
    document.getElementById('multiplicar').addEventListener('click',()=>operaciones('multiplicar'));
    document.getElementById('potencia').addEventListener('click',()=>operaciones('potencia'));
        


});

