import { useState } from "react";
import './App.css';


export const Contador = () => {
    const [count, setCount] = useState(0);


    function incrementHandler() {
        setCount(count + 1);
    }


    function decrementHandler() {
        setCount(count - 1);
    }


    return (
        <div>
            <h2>Contador Básico</h2>
            <h3>Valor: {count}</h3>
            <button onClick={incrementHandler}>Incrementar</button>
            <button onClick={decrementHandler}>Decrementar</button>
        </div>
    );
}


export default App;
