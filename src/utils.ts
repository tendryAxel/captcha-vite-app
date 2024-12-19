import {default as axios} from "axios";

export const get = (
    addFunction: (output: string)=>void,
    remaining: number,
    total: number,
    reload: () => void,
) => {
    if (remaining == 0) return false;
    axios.get(import.meta.env.VITE_URL)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            addFunction((total-remaining) + ": " + error.message)
            // console.error(error)
        })
        .finally(()=> {
            reload();
            get(addFunction, remaining - 1, total, reload);
        })
    return true;
}