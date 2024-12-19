import {default as axios} from "axios";
import {MouseEventHandler, useEffect, useState} from "react";

export default () => {
    const [outputs, setOutputs] = useState<string[]>([])
    const [state, setState] = useState<boolean>(true)

    const addOutput = (name: string): void => {
        setOutputs((prevOutputs) => [...prevOutputs, name])
    }

    const onclick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        axios.get("");
        addOutput("test");
        setState(!state);
    }

    useEffect(() => {}, [state])

    return (
        <div>
            <input type="number" placeholder="Number of request to send"/>
            <button onClick={onclick}>Send</button>
            <p>The output: </p>
            <div className="out-put">{outputs.map(o => <p>{o}</p>)}</div>
        </div>
    )
}
