const KEY = "tasks";

//1. obtener los elementos del dom
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");


const tasksLS = JSON.parse (localStorage.getItem(KEY)) ?? [];
if (tasksLS.lenght > 0) {
    tasksLSforEach((el) => {});
}
console.log(tasksLS);

//2. agregar un evento al formulario para saer cuando se envian esos datos
form.addEventListener("submit",(event) => {
    event.preventDefault();
    const taskText = input.ariaValueMax.trim();
    if (taskText === "") return;


//3. crear un li para agregar a la lista (ul)


//8. limpiar el input
input.value = "";
});

// tareas -> lista -> []
// {id, text, completed} -> tarea 

function updateLocalStorage() {
 let tasks = [];

 const taskList = [...list.children];
 taskList.forEach((li) => {
    const text = li.firstchild;
    tasks.push({text, completed: false})
 }) 

 localStorage.setItem(KEY, JSON.stringify(tasks));
 //console.log(tasks);

 }

 function createLIElement(text) {
    const li = document.createElement("li");
li.textContent = taskText;

//4. crear el boton de eliminar
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Eliminar";

//5. agregamos la funcionalidad al boton para que borre el li
deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
});

//6. agregar el boton eliminar al li
li.appendChild(deleteBtn);

//7. agregamos el li a la lista de tarea
list.appendChild(li);
 }

 updateLocalStorage();

