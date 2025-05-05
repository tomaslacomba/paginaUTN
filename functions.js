//tipos de funciones - declaracion
//default function -> admite hoisting

function sumar (a, b) {
    return a + b;
}

//invocacion -> ()
const suma = suma (1, 4);

console.log (suma);

//default function nombrada ->  admite hosting
// declaracion
function sumar (a, b) {
return a + b;
}

console.log (resta(6, 2));

// function anonima
// no admite hoisting 
const resta = function (a, b) {
    return a - b;
};

//function autoinvocable, IIFF

(function(){
    console.log("hola");
})()



// arrow function
// no admite hoisting.  -> ver los 7 bindings de la palabra "this"
// la unica que no se puede utilizar como metodo de una clase/objeto
const myFunction = (a, b) => {
    return a + b;
};

console.log(myFunction(2, 6));



