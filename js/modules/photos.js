import { local } from "./urls.js";
import { remoto } from "./urls.js";
import { pc } from "./urls.js";
import { placeHolder } from "./urls.js";

let enlace = placeHolder;

export const getAllPhotos = async() => {
    let res = await fetch(enlace.photos);
    let data = await res.json();
    return data;
}

const validarAdd = async(arg) => {
    if (Object.keys(arg).length !== 4) {
        console.error("El argumento NO cumple la validacion: 'Numero de Argumentos'");
        return false;
    }
    if (!("albumId" in arg) || !("title" in arg) || !("url" in arg) || !("thumbnailUrl" in arg)) {
        console.error("El argumento NO cumple la validacion: 'Nombre Argumentos'");
        return false;
    }
    if ((typeof arg.albumId !== "string") || (typeof arg.title !== "string") || (typeof arg.url !== "string") || (typeof arg.thumbnailUrl !== "string")) {
        console.error("El argumento NO cumple la validacion: 'Tipo de Dato'");
        return false;
    }
    return true;
}

const validarDelete = async(id) => {
    if (typeof id !== "string") {
        return false;
    }

    let res = await fetch(`${enlace.photos}/${id}`);
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

    let res = await fetch(`${enlace.photos}/${id}`);
    if (res.status == "404") {
        alert("Este ID NO existe");
        return false;
    }

    alert("Este ID SI existe");
    return true;
}

export const addPhoto = async() => {
    let arg = {};

    arg.albumId = prompt("Ingrese 'albumId' para la photo");
    arg.title = prompt("Ingrese 'title' para la photo");
    arg.url = prompt("Ingrese 'url' para la photo");
    arg.thumbnailUrl = prompt("Ingrese 'thumbnailUrl' para la photo");

    if (await validarAdd(arg)) {
        let config = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(arg)
        }

        let res = await fetch(enlace.photos, config) ;
        let data = await res.json();
        alert("Publicado !");
        return data;
    }

    return false
}

export const deletePhoto = async()=>{
    let id = prompt("Ingrese ID de la photo a eliminar");
    if (await validarDelete(id)) {
        let config = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
            }
            let res = await fetch(`${enlace.photos}/${id}`, config);
            let data = await res.json();
            alert("Eliminado !");
            return data;
    }
    return false;
}

export const updatePhoto = async() => {
    let id = prompt("Ingrese ID de la photo a editar");
    let arg = await fetch(`${enlace.photos}/${id}`);

    if (await validarPut(id)) {
        arg = await arg.json();
        

        let NEWalbumId = prompt("Ingrese 'albumId' a editar (deje en blanco para mantener)");
        if (NEWalbumId) {
            arg.albumId = NEWalbumId;
        }
        let NEWurl = prompt("Ingrese 'url' a editar (deje en blanco para mantener)");
        if (NEWurl) {
            arg.url = NEWurl;
        }
        let NEWtitle = prompt("Ingrese 'title' a editar (deje en blanco para mantener)");
        if (NEWtitle) {
            arg.title = NEWtitle;
        }
        let NEWthumbnailUrl = prompt("Ingrese 'thumbnailUrl' a editar (deje en blanco para mantener)");
        if (NEWthumbnailUrl) {
            arg.thumbnailUrl = NEWthumbnailUrl;
        }

        let config = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(arg)
        }

        let res = await fetch(`${enlace.photos}/${arg.id}`, config) ;
        let data = await res.json();
        alert("Actualizado !");
        return data;
    }
}