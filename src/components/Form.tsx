import {default as axios} from "axios";
import {MouseEventHandler, useEffect, useState} from "react";

export default () => {
    const [outputs, setOutputs] = useState<string[]>([])
    const [state, setState] = useState<boolean>(true)
    const [numberOfRequest, setNumberOfRequest] = useState<number>(0)

    const addOutput = (name: string): void => {
        setOutputs((prevOutputs) => [...prevOutputs, name])
    }

    const onclick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        axios.get(import.meta.env.VITE_URL)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                addOutput(error.message)
                // console.error(error)
            })
        setState(!state);
    }

    useEffect(() => {}, [state])

    return (
        <div>
            <input type="number" placeholder="Number of request to send" onChange={e => {
                e.preventDefault()
                setNumberOfRequest(Number(e.target.value))
            }}/>
            <button onClick={onclick}>Send</button>
            <p>The output: </p>
            <div className="out-put">{outputs.map(o => <p>{o}</p>)}</div>
        </div>
    )
}
