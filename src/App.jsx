import "./app.css";
import { InputControlador } from "./components/InputControlador";
import { MostrarOcultar } from "./components/MostrarOcultar";
import {Contador} from "./components/Contador"

function App() {
  return(
    <>
    <h3>Contador</h3>
    <Contador/>

    <h3>Input controlado</h3>
    <InputControlador/>

    <h3>Mostrar ocultar elementos</h3>
    <MostrarOcultar/>

    <h3>Pasaje de useState por props a componente hijo</h3>

    <h3>Lista de tareas</h3>

    </>
  );
}

export default App;
