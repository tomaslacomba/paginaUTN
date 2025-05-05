let persona = {
    edad: 24,
    nombre: "tomas"
    apellido: "lacomba"
    fechaNacimiento: "25/04/2002"
    activo: true,
};

let persona2 = persona; // binding


console.log("persona: ", persona);

persona.activo = "false y mas"; // ->setter

console.log (persona.activo); // -> getter

persona.id = 156;

delete persona.activo;

persona2.apellido = martinez;

console.log("persona2: ", persona2);

