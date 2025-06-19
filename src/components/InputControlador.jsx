import {useState} from "react";
import './App.css';

export const InputControlador = () => {
    const [inputText, setInputText] = useState ("");
    function inputTextHandler (e) {
        setInputText(e.target.value);
    }

    return (
        <div>
            <input type="text" 
            name="userText" 
            id="" 
            onChange={inputTextHandler(e)} 
            />
            <h3>{inputText}</h3>
        </div>
    )
}

