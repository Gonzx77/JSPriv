import { local } from "./urls.js";
import { remoto } from "./urls.js";
import { pc } from "./urls.js";
import { placeHolder } from "./urls.js";

let enlace = placeHolder;

export const getAllComments = async() => {
    let res = await fetch(enlace.comments);
    let data = await res.json();
    return data;
}

const validarAdd = async(arg) => {
    if (Object.keys(arg).length !== 4) {
        console.error("El argumento NO cumple la validacion: 'Numero de Argumentos'");
        return false;
    }
    if (!("postId" in arg) || !("name" in arg) || !("email" in arg) || !("body" in arg)){
        console.error("El argumento NO cumple la validacion: 'Nombre Argumentos'");
        return false;
    }
    if ((typeof arg.postId !== "string") || (typeof arg.name !== "string") || (typeof arg.email !== "string") || (typeof arg.body !== "string")) {
        console.error("El argumento NO cumple la validacion: 'Tipo de Dato'");
        return false;
    }

    let valid = await fetch(`${enlace.posts}/${arg.postId}`);
    if (valid.status == "404") {
        alert("El postId no existe !");
        return false;
    }

    return true;
}

const validarDelete = async(id) => {
    if (typeof id !== "string") {
        return false;
    }

    let res = await fetch(`${enlace.comments}/${id}`);
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

    let res = await fetch(`${enlace.comments}/${id}`);
    if (res.status == "404") {
        alert("Este ID NO existe");
        return false;
    }

    alert("Este ID SI existe");
    return true;
}

export const addComment = async() => {
    let arg = {};

    arg.postId = prompt("Ingrese 'postId' para el comment");
    arg.name = prompt("Ingrese 'name' para el comment");
    arg.email = prompt("Ingrese 'email' para el comment");
    arg.body = prompt("Ingrese 'body' para el comment");

    if (await validarAdd(arg)) {
        let config = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(arg)
        }

        let res = await fetch(enlace.comments, config) ;
        let data = await res.json();
        alert("Publicado !");
        return data;
    }

    return false
}

export const deleteComment = async()=>{
    let id = prompt("Ingrese ID del comment a eliminar");
    if (await validarDelete(id)) {
        let config = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
            }
            let res = await fetch(`${enlace.comments}/${id}`, config);
            let data = await res.json();
            alert("Eliminado !");
            return data;
    }
    return false;
}

export const updateComment = async() => {
    let id = prompt("Ingrese ID del comment a editar");
    let arg = await fetch(`${enlace.comments}/${id}`);

    if (await validarPut(id)) {
        arg = await arg.json();
        

        let NEWuserid = prompt("Ingrese 'postId' a editar (deje en blanco para mantener)");
        if (NEWuserid) {
            arg.postId = NEWuserid;
        }
        let NEWtitle = prompt("Ingrese 'name' a editar (deje en blanco para mantener)");
        if (NEWtitle) {
            arg.name = NEWtitle;
        }
        let NEWemail = prompt("Ingrese 'email' a editar (deje en blanco para mantener)");
        if (NEWemail) {
            arg.email = NEWemail;
        }
        let NEWbody = prompt("Ingrese 'body' a editar (deje en blanco para mantener)");
        if (NEWbody) {
            arg.body = NEWbody;
        }
        

        let config = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(arg)
        }

        let res = await fetch(`${enlace.comments}/${arg.id}`, config) ;
        let data = await res.json();
        alert("Actualizado !");
        return data;
    }
}