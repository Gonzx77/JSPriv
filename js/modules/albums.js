import { local } from "./urls.js";
import { remoto } from "./urls.js";


export const getAllAlbums = async() => {
    let res = await fetch(remoto.albums);
    let data = await res.json();
    return data;
}

const validarAdd = (arg) => {
    if (Object.keys(arg).length !== 2) {
        console.error("El argumento NO cumple la validacion: 'Numero de Argumentos'");
        return false;
    }
    if (!("userId" in arg) || !("title" in arg)) {
        console.error("El argumento NO cumple la validacion: 'Nombre Argumentos'");
        return false;
    }
    if ((typeof arg.userId !== "string") || (typeof arg.title !== "string")) {
        console.error("El argumento NO cumple la validacion: 'Tipo de Dato'");
        return false;
    }
    return true;
}

const validarDelete = (id) => {
    if (typeof id !== "string") {
        return false;
    }
    return true;
}

export const addAlbum = async() => {
    let arg = {};

    arg.userId = prompt("Ingrese 'userId' para el album");
    arg.title = prompt("Ingrese 'title' para el album");

    if (validarAdd(arg)) {
        let userId = arg.userId;
        let title = arg.title;
        let config = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                userId,
                title
            })
        }

        let res = await fetch(remoto.albums, config) ;
        let data = await res.json();
        alert("Publicado !");
        return data;
    }

    return false
}

export const deleteAlbum = async(id)=>{
    if (validarDelete(id)) {
        let config = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
            }
            let res = await fetch(`${remoto.albums}/${id}`, config);
            let data = await res.json();
            return data;
    }
    return false;
}