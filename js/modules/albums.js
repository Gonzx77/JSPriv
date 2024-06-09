import { local } from "./urls.js";
import { remoto } from "./urls.js";
import { pc } from "./urls.js";
import { placeHolder } from "./urls.js";

let enlace = placeHolder;

export const getAllAlbums = async() => {
    let res = await fetch(enlace.albums);
    let data = await res.json();
    return data;
}

const validarAdd = async(arg) => {
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

const validarDelete = async(id) => {
    if (typeof id !== "string") {
        return false;
    }

    let res = await fetch(`${enlace.albums}/${id}`);
    if (res.status == "404") {
        alert("Este ID NO existe");
        return false;
    }

    alert("Este ID SI existe");
    return true;
}

const validarPut = async(id) => {
    if (typeof id !== "string") {
        return false;
    }

    let res = await fetch(`${enlace.albums}/${id}`);
    if (res.status == "404") {
        alert("Este ID NO existe");
        return false;
    }

    alert("Este ID SI existe");
    return true;
}

export const addAlbum = async() => {
    let arg = {};

    arg.userId = prompt("Ingrese 'userId' para el album");
    arg.title = prompt("Ingrese 'title' para el album");

    if (await validarAdd(arg)) {
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

        let res = await fetch(enlace.albums, config) ;
        let data = await res.json();
        alert("Publicado !");
        return data;
    }

    return false
}

export const deleteAlbum = async()=>{
    let id = prompt("Ingrese ID del album a eliminar");
    if (await validarDelete(id)) {
        let config = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
            }
            let res = await fetch(`${enlace.albums}/${id}`, config);
            let data = await res.json();
            alert("Eliminado !");
            return data;
    }
    return false;
}

export const updateAlbum = async() => {
    let id = prompt("Ingrese ID del album a editar");
    let arg = await fetch(`${enlace.albums}/${id}`);

    if (await validarPut(id)) {
        arg = await arg.json();
        

        let NEWuserid = prompt("Ingrese 'userId' a editar (deje en blanco para mantener)");
        if (NEWuserid) {
            arg.userId = NEWuserid;
        }
        let NEWtitle = prompt("Ingrese 'title' a editar (deje en blanco para mantener)");
        if (NEWtitle) {
            arg.title = NEWtitle;
        }


        let id = arg.id;
        let userId = arg.userId;
        let title = arg.title;

        let config = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id,
                userId,
                title
            })
        }

        let res = await fetch(`${enlace.albums}/${arg.id}`, config) ;
        let data = await res.json();
        alert("Actualizado !");
        return data;
    }
}