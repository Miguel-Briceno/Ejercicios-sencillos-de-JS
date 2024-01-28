document.addEventListener('DOMContentLoaded',()=>{//Cuando se cargue el Dom se ejecute la funcion anonima    
    // en los siguientes script seleccionamos a los elementos html(button), por el id y le asignamos un escuchador de eventos
    // cuando se haga click sobre el boton se ejecutara una arrow function, donde se toma el elemento del parrafo y 
    // con la funcion style, se le asigna el color respectivo.
    document.getElementById('azul').addEventListener('click',()=> document.getElementById('color').style.color = 'blue');
    document.getElementById('verde').addEventListener('click',()=> document.getElementById('color').style.color = 'green');
    document.getElementById('rojo').addEventListener('click',()=> document.getElementById('color').style.color = 'red');

});