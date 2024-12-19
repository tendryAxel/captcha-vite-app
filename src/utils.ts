import {default as axios} from "axios";

export const get = (addFunction: (output: string)=>void) => {
    axios.get(import.meta.env.VITE_URL)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            addFunction(error.message)
            // console.error(error)
        })
}