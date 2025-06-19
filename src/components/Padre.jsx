import {useState} from "react";
import Hijo from "./hijo"

export default function Padre() {
    const [count, setCount] = useState (0);
    return (
    <div>
        <Hijo count={count}/>
        <button onClick={() => setCount(count + 1)} > aumentar</button>
    </div>
    );
}