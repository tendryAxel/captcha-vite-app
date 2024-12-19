import {default as axios} from "axios";

export const get = (addFunction: (output: string)=>void, index: number) => {
    axios.get(import.meta.env.VITE_URL)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            addFunction(index + ": " + error.message)
            // console.error(error)
        })
}