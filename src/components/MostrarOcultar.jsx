import {useState} from "react";
import './App.css';

export const MostrarOcultar = () => {
    const [mostrable, setMostrable] = useState(true);
    const handlerMostrable = () => setMostrable (mostrable);
    return (
    <div>
        <button onClick={handlermostrable}>
            {mostrable ? "Ocultar texto" : "Mostrar texto"}
            </button>
            { 
            mostrable && <p>Texto que se puede ocultar</p>
            }
    </div>
    );
};