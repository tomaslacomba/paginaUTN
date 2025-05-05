const person1 = {
    nombre: "joe",
    apellido: "doe",

};

const person2 = {
    nombre: "john",
    apellido: "doe",

};

const person3 = {
    nombre: "jane",
    apellido: "doe",

};



const persons =[person1, person2, person3];

const response = {
    status: 200,
    message: "ok",
    data: persons,
};

console log (response);




let numbers = [1, 2, 3, 4, 5, "pepe"];

numbers.push(3);

numbers.unshift(-1); // agrega datos

numbers.shift(); // elimina de la primera posicion

numbers.pop(); // elimina el valor al final de la lista

console.log(numbers[3]);

console.log(numbers.slice(2, 4));



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* for (let index = 0; i < array.length; i++) {
    const element = array[i];
    
} */

/* for (const element of numbers) {
console.log(element);
}

for (let i in numbers) {
    console.log(numbers [i]);
} */


